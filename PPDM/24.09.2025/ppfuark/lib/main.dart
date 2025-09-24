import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:ppfuark/components/Box.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return (MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text("@phfuark", style: TextStyle(color: Colors.white),),
          centerTitle: true,
          backgroundColor: Colors.deepPurpleAccent,
        ),
        body: 
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Box(num: "1"),
                    Box(num: "2"),
                  ]
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Box(num: "1"),
                    Box(num: "2"),
                  ]
                )
              ],
        ),
      ),
    ));
  }
}
