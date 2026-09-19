import 'package:flutter/material.dart';

class DetectedColor {
  final int red;
  final int green;
  final int blue;
  final String hex;

  const DetectedColor({
    required this.red,
    required this.green,
    required this.blue,
    required this.hex,
  });

  Color get color => Color.fromARGB(255, red, green, blue);

  String get rgbLabel => '$red, $green, $blue';
}
