import 'package:flutter/material.dart';

class ButtonWithIcon extends StatefulWidget {
  final IconData icon;
  final VoidCallback? onPressed;
  final double? margin;

  const ButtonWithIcon({
    super.key,
    required this.icon,
    this.onPressed,
    this.margin,
  });

  @override
  State<ButtonWithIcon> createState() => _ButtonWithIconState();
}

class _ButtonWithIconState extends State<ButtonWithIcon> {
  bool _isDisable = false;

  void _onTap() {
    if (_isDisable == false) {
      widget.onPressed?.call();
    }
    setState(() => _isDisable = true);
  }

  @override
  Widget build(BuildContext context) {
    double size = MediaQuery.of(context).size.width * 0.2;

    return GestureDetector(
      onTap: _onTap,
      child: Container(
        margin: EdgeInsets.only(left: widget.margin!),
        height: size,
        child: Stack(
          children: [
            Container(
              width: size,
              height: _isDisable ? size * 0.9 : size,
              decoration: BoxDecoration(
                color: _isDisable ? Colors.grey[600] : Colors.deepPurple,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(size * 0.5),
                  topRight: Radius.circular(size * 0.5),
                  bottomLeft: Radius.circular(size * 0.43),
                  bottomRight: Radius.circular(size * 0.43),
                ),
              ),
            ),
            Container(
              width: size,
              height: _isDisable ? size * 0.75 : size * 0.9,
              decoration: BoxDecoration(
                color: _isDisable ? Colors.grey[400] : Colors.deepPurpleAccent,
                borderRadius: BorderRadius.circular(size * 0.5),
              ),
              child: Icon(
                widget.icon,
                color: _isDisable ? Colors.grey[600] : Colors.white,
                size: size * 0.5,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
