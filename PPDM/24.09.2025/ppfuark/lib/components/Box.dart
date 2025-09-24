import 'package:flutter/material.dart';

class Box extends StatelessWidget {
  String num;
  Color? color;

  Box({required this.num, this.color });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.45,
      height: MediaQuery.of(context).size.width * 0.45,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: Color.fromARGB(255, 142, 70, 175),
      ),
      child: Center(
        child: Text(num, style: TextStyle(
          color: color != null? color : Colors.white, fontSize: 50
        ),),
      ),
    );
  }
}