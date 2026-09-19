import 'dart:typed_data';

import 'package:camera/camera.dart';

import '../models/detected_color.dart';
import '../utils/color_converter.dart';

class ColorDetectionService {
  const ColorDetectionService({this.measurementSize = 50, this.sampleStep = 2});

  final int measurementSize;
  final int sampleStep;

  DetectedColor analyze(CameraImage image) {
    if (image.format.group != ImageFormatGroup.bgra8888) {
      throw UnsupportedError(
        'Desteklenmeyen pixel format: ${image.format.group.name}',
      );
    }

    if (image.planes.isEmpty) {
      throw StateError('CameraImage plane verisi bos.');
    }

    final plane = image.planes.first;
    return calculateAverageFromBgra8888(
      bytes: plane.bytes,
      width: image.width,
      height: image.height,
      bytesPerRow: plane.bytesPerRow,
      bytesPerPixel: plane.bytesPerPixel ?? 4,
      areaSize: measurementSize,
      step: sampleStep,
    );
  }

  DetectedColor calculateAverageFromBgra8888({
    required Uint8List bytes,
    required int width,
    required int height,
    required int bytesPerRow,
    int bytesPerPixel = 4,
    int? areaSize,
    int? step,
  }) {
    if (width <= 0 || height <= 0) {
      throw ArgumentError('Gecersiz goruntu boyutu.');
    }

    if (bytesPerPixel < 4) {
      throw ArgumentError('BGRA8888 icin bytesPerPixel en az 4 olmalidir.');
    }

    final effectiveArea = (areaSize ?? measurementSize).clamp(1, width);
    final effectiveStep = (step ?? sampleStep).clamp(1, effectiveArea);
    final startX = ((width - effectiveArea) / 2).floor().clamp(0, width - 1);
    final startY = ((height - effectiveArea) / 2).floor().clamp(0, height - 1);
    final endX = (startX + effectiveArea).clamp(0, width);
    final endY = (startY + effectiveArea).clamp(0, height);

    var totalR = 0;
    var totalG = 0;
    var totalB = 0;
    var pixelCount = 0;

    for (var y = startY; y < endY; y += effectiveStep) {
      final rowOffset = y * bytesPerRow;

      for (var x = startX; x < endX; x += effectiveStep) {
        final offset = rowOffset + x * bytesPerPixel;

        if (offset + 2 >= bytes.length) {
          continue;
        }

        final blue = bytes[offset];
        final green = bytes[offset + 1];
        final red = bytes[offset + 2];

        totalR += red;
        totalG += green;
        totalB += blue;
        pixelCount++;
      }
    }

    if (pixelCount == 0) {
      throw StateError('Olcum alanindan piksel okunamadi.');
    }

    final red = (totalR / pixelCount).round().clamp(0, 255).toInt();
    final green = (totalG / pixelCount).round().clamp(0, 255).toInt();
    final blue = (totalB / pixelCount).round().clamp(0, 255).toInt();

    return DetectedColor(
      red: red,
      green: green,
      blue: blue,
      hex: ColorConverter.rgbToHex(red, green, blue),
    );
  }
}
