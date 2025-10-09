import 'package:flutter/material.dart';

class ButtonWithIcon extends StatefulWidget {
  final IconData icon;
  final VoidCallback? onPressed;

  const ButtonWithIcon({super.key, required this.icon, this.onPressed});

  @override
  State<ButtonWithIcon> createState() => _ButtonWithIconState();
}

class _ButtonWithIconState extends State<ButtonWithIcon> {
  bool _isPressed = false;

  void _onTapDown(TapDownDetails details) {
    setState(() => _isPressed = true);
  }

  void _onTapUp(TapUpDetails details) {
    setState(() => _isPressed = false);
    widget.onPressed?.call();
  }

  void _onTapCancel() {
    setState(() => _isPressed = false);
  }

  @override
  Widget build(BuildContext context) {
    double size = MediaQuery.of(context).size.width * 0.22;

    return GestureDetector(
      onTapDown: _onTapDown,
      onTapUp: _onTapUp,
      onTapCancel: _onTapCancel,
      child: Container(
        alignment: AlignmentDirectional.bottomCenter,
        height: size * 0.8,
        child: Stack(
          alignment: AlignmentGeometry.topCenter,
          children: [
            Container(
              width: size,
              height: _isPressed ? size * 0.7 : size * 0.8,
              decoration: BoxDecoration(
                color: Colors.green[700],
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(size * 0.4),
                  topRight: Radius.circular(size * 0.4),
                  bottomLeft: Radius.circular(size * 0.33),
                  bottomRight: Radius.circular(size * 0.33),
                ),
              ),
            ),
            Container(
              width: size,
              height: _isPressed ? size * 0.6 : size * 0.7,
              decoration: BoxDecoration(
                color: _isPressed ? Colors.green[500] : Colors.green[400],
                borderRadius: BorderRadius.circular(size * 0.4),
              ),
              child: Icon(widget.icon, color: Colors.white, size: size * 0.5),
            ),
          ],
        ),
      ),
    );
  }
}
