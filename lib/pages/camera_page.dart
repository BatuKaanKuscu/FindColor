import 'dart:async';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

import '../models/detected_color.dart';
import '../services/camera_service.dart';
import '../services/color_detection_service.dart';
import '../widgets/color_result_card.dart';
import '../widgets/measurement_box.dart';

class CameraPage extends StatefulWidget {
  const CameraPage({super.key});

  @override
  State<CameraPage> createState() => _CameraPageState();
}

class _CameraPageState extends State<CameraPage> with WidgetsBindingObserver {
  static const _analysisInterval = Duration(milliseconds: 400);

  final _cameraService = CameraService();
  final _colorDetectionService = const ColorDetectionService();

  CameraController? _controller;
  DetectedColor? _liveColor;
  DetectedColor? _lockedColor;
  String? _errorMessage;
  DateTime _lastAnalysisAt = DateTime.fromMillisecondsSinceEpoch(0);
  bool _isInitializing = false;
  bool _isProcessing = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    unawaited(_initializeCamera());
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    unawaited(_cameraService.dispose());
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused ||
        state == AppLifecycleState.detached) {
      unawaited(_disposeCameraForLifecycle());
      return;
    }

    if (state == AppLifecycleState.resumed && mounted) {
      unawaited(_initializeCamera());
    }
  }

  Future<void> _disposeCameraForLifecycle() async {
    await _cameraService.dispose();
    if (!mounted) {
      return;
    }

    setState(() {
      _controller = null;
    });
  }

  Future<void> _initializeCamera() async {
    if (_isInitializing) {
      return;
    }

    final currentController = _controller;
    if (currentController != null && currentController.value.isInitialized) {
      return;
    }

    setState(() {
      _isInitializing = true;
      _errorMessage = null;
    });

    try {
      final controller = await _cameraService.initialize(onImage: _onImage);
      if (!mounted) {
        return;
      }

      setState(() {
        _controller = controller;
      });
    } on CameraServiceException catch (error) {
      if (!mounted) {
        return;
      }

      setState(() {
        _errorMessage = error.message;
      });
    } catch (error) {
      if (!mounted) {
        return;
      }

      setState(() {
        _errorMessage = 'Beklenmeyen kamera hatasi: $error';
      });
    } finally {
      if (mounted) {
        setState(() {
          _isInitializing = false;
        });
      }
    }
  }

  void _onImage(CameraImage image) {
    final now = DateTime.now();
    if (_isProcessing || now.difference(_lastAnalysisAt) < _analysisInterval) {
      return;
    }

    _lastAnalysisAt = now;
    unawaited(_processImage(image));
  }

  Future<void> _processImage(CameraImage image) async {
    _isProcessing = true;

    try {
      final color = _colorDetectionService.analyze(image);
      if (!mounted) {
        return;
      }

      setState(() {
        _liveColor = color;
        _errorMessage = null;
      });
    } on UnsupportedError catch (error) {
      if (!mounted) {
        return;
      }

      setState(() {
        _errorMessage = error.message;
      });
    } catch (_) {
      if (!mounted) {
        return;
      }

      setState(() {
        _errorMessage = 'Goruntu analiz edilirken hata olustu.';
      });
    } finally {
      _isProcessing = false;
    }
  }

  void _lockCurrentColor() {
    final color = _liveColor;
    if (color == null) {
      return;
    }

    setState(() {
      _lockedColor = color;
    });
  }

  @override
  Widget build(BuildContext context) {
    final controller = _controller;

    return Scaffold(
      body: SafeArea(
        top: false,
        child: Stack(
          fit: StackFit.expand,
          children: [
            if (controller != null && controller.value.isInitialized)
              _CameraPreview(controller: controller)
            else
              const _CameraPlaceholder(),
            const Center(child: MeasurementBox()),
            Positioned(
              top: MediaQuery.paddingOf(context).top + 16,
              left: 20,
              right: 20,
              child: const _Header(),
            ),
            Positioned(
              left: 16,
              right: 16,
              bottom: 16,
              child: ColorResultCard(
                liveColor: _liveColor,
                lockedColor: _lockedColor,
                errorMessage: _errorMessage,
                isInitializing: _isInitializing,
                onMeasurePressed: _lockCurrentColor,
                onRetryPressed: _initializeCamera,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _CameraPreview extends StatelessWidget {
  const _CameraPreview({required this.controller});

  final CameraController controller;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final previewSize = controller.value.previewSize;
        if (previewSize == null) {
          return CameraPreview(controller);
        }

        return ClipRect(
          child: OverflowBox(
            alignment: Alignment.center,
            child: FittedBox(
              fit: BoxFit.cover,
              child: SizedBox(
                width: previewSize.height,
                height: previewSize.width,
                child: CameraPreview(controller),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _CameraPlaceholder extends StatelessWidget {
  const _CameraPlaceholder();

  @override
  Widget build(BuildContext context) {
    return const DecoratedBox(
      decoration: BoxDecoration(color: Color(0xFF111418)),
      child: Center(child: CircularProgressIndicator()),
    );
  }
}

class _Header extends StatelessWidget {
  const _Header();

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'CANLI KAMERA',
          style: TextStyle(
            fontSize: 13,
            fontWeight: FontWeight.w700,
            letterSpacing: 0,
            color: Colors.white70,
          ),
        ),
        SizedBox(height: 4),
        Text(
          'Merkezdeki alan olculuyor',
          style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700),
        ),
      ],
    );
  }
}
