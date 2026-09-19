import 'package:flutter/material.dart';

import 'pages/camera_page.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const FindColorApp());
}

class FindColorApp extends StatelessWidget {
  const FindColorApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Find Color',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF4DD0E1),
          brightness: Brightness.dark,
        ),
        scaffoldBackgroundColor: const Color(0xFF101214),
      ),
      home: const CameraPage(),
    );
  }
}
