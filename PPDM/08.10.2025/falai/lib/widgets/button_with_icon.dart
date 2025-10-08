import 'package:flutter/material.dart';

class ButtonWithIcon extends StatefulWidget {
  final IconData icon; // icon = Icons.add;

  const ButtonWithIcon({super.key, required this.icon});

  @override
  State<ButtonWithIcon> createState() => _ButtonWithIconState();
}

class _ButtonWithIconState extends State<ButtonWithIcon> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      GestureDetector(
        onTap: () {
          
        },
      )
    ]);
  }
}
