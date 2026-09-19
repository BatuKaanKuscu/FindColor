class ColorConverter {
  const ColorConverter._();

  static String rgbToHex(int red, int green, int blue) {
    final r = _clampColorValue(red);
    final g = _clampColorValue(green);
    final b = _clampColorValue(blue);

    return '#'
            '${r.toRadixString(16).padLeft(2, '0')}'
            '${g.toRadixString(16).padLeft(2, '0')}'
            '${b.toRadixString(16).padLeft(2, '0')}'
        .toUpperCase();
  }

  static int _clampColorValue(int value) => value.clamp(0, 255).toInt();
}
