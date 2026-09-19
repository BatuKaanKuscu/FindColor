import 'dart:typed_data';

import 'package:find_color/services/color_detection_service.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ColorDetectionService.calculateAverageFromBgra8888', () {
    test('averages BGRA pixels without swapping red and blue channels', () {
      final bytes = Uint8List.fromList([
        30,
        20,
        10,
        255,
        60,
        50,
        40,
        255,
        90,
        80,
        70,
        255,
        120,
        110,
        100,
        255,
      ]);

      final color = const ColorDetectionService().calculateAverageFromBgra8888(
        bytes: bytes,
        width: 2,
        height: 2,
        bytesPerRow: 8,
        areaSize: 2,
        step: 1,
      );

      expect(color.red, 55);
      expect(color.green, 65);
      expect(color.blue, 75);
      expect(color.hex, '#37414B');
    });

    test('honors bytesPerRow padding', () {
      final bytes = Uint8List.fromList([
        1,
        2,
        3,
        255,
        5,
        6,
        7,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        9,
        10,
        11,
        255,
        13,
        14,
        15,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ]);

      final color = const ColorDetectionService().calculateAverageFromBgra8888(
        bytes: bytes,
        width: 2,
        height: 2,
        bytesPerRow: 16,
        areaSize: 2,
        step: 1,
      );

      expect(color.red, 9);
      expect(color.green, 8);
      expect(color.blue, 7);
      expect(color.hex, '#090807');
    });
  });
}
