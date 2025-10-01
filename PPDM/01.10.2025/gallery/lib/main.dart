import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Flutter',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const MainPage(),
    );
  }
}

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Main Page")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                
                Image.network(
                  "https://hips.hearstapps.com/hmg-prod/images/white-cat-breeds-kitten-in-grass-67bf648a54a3b.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
                  width: 100,
                  height: 100,
                ),
                const SizedBox(width: 20),
                
                Image.asset(
                  'assets/gatinho.png',
                  width: 100,
                  height: 100,
                ),
              ],
            ),
            const SizedBox(height: 40),

            
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                
                const Text(
                  "Fonte Asset",
                  style: TextStyle(
                    fontFamily: 'Poppins',
                    fontSize: 20,
                  ),
                ),
                const SizedBox(width: 20),
                
                Text(
                  "Fonte Google",
                  style: GoogleFonts.lobster(fontSize: 20),
                ),
              ],
            ),
            const SizedBox(height: 40),

            
            ElevatedButton(
              onPressed: () {},
              child: const Text("Clique Aqui"),
            ),
          ],
        ),
      ),
    );
  }
}
