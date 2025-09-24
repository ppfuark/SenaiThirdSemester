import 'package:flutter/material.dart';
import 'package:ppfuark/components/Box.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text("@phfuark", style: TextStyle(color: Colors.white)),
          centerTitle: true,
          backgroundColor: Colors.deepPurpleAccent,
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Box(num: "1"),
                Box(num: "2"),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Box(num: "3"),
                Box(
                  num: "4",
                  imgUrl:
                      "https://external-preview.redd.it/D0s83UjeCBNikxR4vcZCJuX1BdeIdP35iNc0dEdHcP4.jpg?width=640&crop=smart&auto=webp&s=a1aaa2891c79903a2e2edc418b53bbb593ad0637",
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
