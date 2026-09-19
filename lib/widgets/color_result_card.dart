import 'package:flutter/material.dart';

import '../models/detected_color.dart';

class ColorResultCard extends StatelessWidget {
  const ColorResultCard({
    super.key,
    required this.liveColor,
    required this.lockedColor,
    required this.errorMessage,
    required this.isInitializing,
    required this.onMeasurePressed,
    required this.onRetryPressed,
  });

  final DetectedColor? liveColor;
  final DetectedColor? lockedColor;
  final String? errorMessage;
  final bool isInitializing;
  final VoidCallback onMeasurePressed;
  final VoidCallback onRetryPressed;

  @override
  Widget build(BuildContext context) {
    final shownColor = lockedColor ?? liveColor;

    return DecoratedBox(
      decoration: BoxDecoration(
        color: const Color(0xE61A1D21),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'ALGILANAN RENK',
              style: TextStyle(
                color: Colors.white70,
                fontSize: 12,
                fontWeight: FontWeight.w700,
                letterSpacing: 0,
              ),
            ),
            const SizedBox(height: 12),
            AnimatedContainer(
              duration: const Duration(milliseconds: 180),
              height: 76,
              decoration: BoxDecoration(
                color: shownColor?.color ?? const Color(0xFF2A2F35),
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Colors.white24),
              ),
            ),
            const SizedBox(height: 14),
            _ColorValues(color: shownColor),
            if (errorMessage != null) ...[
              const SizedBox(height: 12),
              Text(
                errorMessage!,
                style: const TextStyle(color: Color(0xFFFFB4AB), fontSize: 13),
              ),
            ],
            const SizedBox(height: 14),
            Row(
              children: [
                Expanded(
                  child: FilledButton.icon(
                    onPressed: liveColor == null ? null : onMeasurePressed,
                    icon: const Icon(Icons.colorize),
                    label: const Text('Rengi Olc'),
                  ),
                ),
                const SizedBox(width: 10),
                IconButton.filledTonal(
                  tooltip: 'Kamerayi yeniden baslat',
                  onPressed: isInitializing ? null : onRetryPressed,
                  icon: const Icon(Icons.refresh),
                ),
              ],
            ),
            if (lockedColor != null) ...[
              const SizedBox(height: 10),
              Text(
                'Sabitlenen: ${lockedColor!.hex}',
                style: const TextStyle(color: Colors.white70, fontSize: 13),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _ColorValues extends StatelessWidget {
  const _ColorValues({required this.color});

  final DetectedColor? color;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: _ValueBlock(label: 'RGB', value: color?.rgbLabel ?? '-'),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: _ValueBlock(label: 'HEX', value: color?.hex ?? '-'),
        ),
      ],
    );
  }
}

class _ValueBlock extends StatelessWidget {
  const _ValueBlock({required this.label, required this.value});

  final String label;
  final String value;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          label,
          style: const TextStyle(
            color: Colors.white54,
            fontSize: 11,
            fontWeight: FontWeight.w700,
            letterSpacing: 0,
          ),
        ),
        const SizedBox(height: 3),
        FittedBox(
          fit: BoxFit.scaleDown,
          alignment: Alignment.centerLeft,
          child: Text(
            value,
            maxLines: 1,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.w700,
            ),
          ),
        ),
      ],
    );
  }
}
