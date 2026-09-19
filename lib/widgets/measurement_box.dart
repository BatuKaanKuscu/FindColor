import 'package:flutter/material.dart';

class MeasurementBox extends StatelessWidget {
  const MeasurementBox({super.key});

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: SizedBox(
        width: 116,
        height: 116,
        child: CustomPaint(painter: _MeasurementBoxPainter()),
      ),
    );
  }
}

class _MeasurementBoxPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final borderPaint = Paint()
      ..color = Colors.white
      ..strokeWidth = 2.4
      ..style = PaintingStyle.stroke;

    final shadowPaint = Paint()
      ..color = Colors.black.withValues(alpha: 0.34)
      ..strokeWidth = 5
      ..style = PaintingStyle.stroke;

    final crossPaint = Paint()
      ..color = const Color(0xFF4DD0E1)
      ..strokeWidth = 2
      ..strokeCap = StrokeCap.round;

    final rect = Offset.zero & size;
    final radius = BorderRadius.circular(8).toRRect(rect);
    canvas.drawRRect(radius, shadowPaint);
    canvas.drawRRect(radius, borderPaint);

    final center = size.center(Offset.zero);
    canvas.drawLine(
      Offset(center.dx - 12, center.dy),
      Offset(center.dx + 12, center.dy),
      crossPaint,
    );
    canvas.drawLine(
      Offset(center.dx, center.dy - 12),
      Offset(center.dx, center.dy + 12),
      crossPaint,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
