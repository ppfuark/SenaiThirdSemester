import '../../widgets/button_with_icon.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool clicked = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Column(
              children: [
                ButtonWithIcon(
                  icon: Icons.add,
                  onPressed: () {
                    setState(() {
                      clicked = !clicked;
                    });
                  },
                ),
                const SizedBox(height: 20),
                Text(
                  clicked ? "AIAIAIAIA" : "ops",
                  style: const TextStyle(fontSize: 24),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
