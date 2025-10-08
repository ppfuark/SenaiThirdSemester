import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: StartButton(
            icon: Icons.star,
            text: "START",
            onPressed: () {
              print("Button pressed!");
            },
          ),
        ),
      ),
    );
  }
}

class StartButton extends StatelessWidget {
  final IconData icon;
  final String? text;
  final VoidCallback onPressed;

  const StartButton({
    required this.icon,
    required this.onPressed,
    this.text,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        if (text != null)
          Container(
            padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 12),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.black12,
                  blurRadius: 4,
                  offset: Offset(0, 2),
                ),
              ],
            ),
            child: Text(
              text!,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.green,
              ),
            ),
          ),
        const SizedBox(height: 8),
        GestureDetector(
          onTap: onPressed,
          child: AnimatedContainer(
            duration: Duration(milliseconds: 100),
            padding: EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: Colors.green,
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: Colors.black26,
                  offset: Offset(3, 3),
                  blurRadius: 5,
                ),
              ],
            ),
            child: Icon(icon, size: 32, color: Colors.white),
          ),
        ),
      ],
    );
  }
}
