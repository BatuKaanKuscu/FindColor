import 'package:find_color/utils/color_converter.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ColorConverter.rgbToHex', () {
    test('converts primary colors and sampled wall color', () {
      expect(ColorConverter.rgbToHex(255, 0, 0), '#FF0000');
      expect(ColorConverter.rgbToHex(0, 255, 0), '#00FF00');
      expect(ColorConverter.rgbToHex(0, 0, 255), '#0000FF');
      expect(ColorConverter.rgbToHex(152, 149, 143), '#98958F');
    });

    test('clamps RGB values to the valid channel range', () {
      expect(ColorConverter.rgbToHex(300, -4, 128), '#FF0080');
    });
  });
}
