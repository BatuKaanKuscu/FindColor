import 'package:camera/camera.dart';

class CameraServiceException implements Exception {
  CameraServiceException(this.message);

  final String message;

  factory CameraServiceException.fromCameraException(CameraException error) {
    return switch (error.code) {
      'CameraAccessDenied' => CameraServiceException('Kamera izni reddedildi.'),
      'CameraAccessDeniedWithoutPrompt' => CameraServiceException(
        'Kamera izni kalici olarak reddedildi. iOS Ayarlar uygulamasindan kamera iznini acin.',
      ),
      'CameraAccessRestricted' => CameraServiceException(
        'Kamera erisimi bu cihazda kisitlanmis.',
      ),
      _ => CameraServiceException(
        'Kamera baslatilamadi: ${error.description ?? error.code}',
      ),
    };
  }

  @override
  String toString() => message;
}

class CameraService {
  CameraController? _controller;
  bool _isStreaming = false;

  CameraController? get controller => _controller;

  Future<CameraController> initialize({
    required void Function(CameraImage image) onImage,
  }) async {
    try {
      final cameras = await availableCameras();
      if (cameras.isEmpty) {
        throw CameraServiceException('Kamera bulunamadi.');
      }

      final camera = cameras.firstWhere(
        (item) => item.lensDirection == CameraLensDirection.back,
        orElse: () => cameras.first,
      );

      final controller = CameraController(
        camera,
        ResolutionPreset.medium,
        enableAudio: false,
        imageFormatGroup: ImageFormatGroup.bgra8888,
      );

      _controller = controller;
      await controller.initialize();
      await controller.startImageStream(onImage);
      _isStreaming = true;

      return controller;
    } on CameraException catch (error) {
      await dispose();
      throw CameraServiceException.fromCameraException(error);
    } on CameraServiceException {
      await dispose();
      rethrow;
    } catch (error) {
      await dispose();
      throw CameraServiceException('Kamera baslatilirken hata olustu: $error');
    }
  }

  Future<void> stopImageStream() async {
    final controller = _controller;
    if (controller == null ||
        !_isStreaming ||
        !controller.value.isInitialized) {
      return;
    }

    await controller.stopImageStream();
    _isStreaming = false;
  }

  Future<void> dispose() async {
    final controller = _controller;
    _controller = null;

    if (controller == null) {
      return;
    }

    try {
      if (_isStreaming && controller.value.isInitialized) {
        await controller.stopImageStream();
      }
    } catch (_) {
      // The native camera may already be torn down during app lifecycle changes.
    } finally {
      _isStreaming = false;
      await controller.dispose();
    }
  }
}
