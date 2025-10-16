import 'package:falai/data/quiz_data.dart';
import 'package:falai/models/user.dart';

import '../../widgets/button_with_icon.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  final User user;
  const HomePage({required this.user, super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  bool clicked = false;

  final List<QuizQuestion> quizData = [
    QuizQuestion(
      question: 'O que é o Dart?',
      options: [
        'Uma linguagem de marcação',
        'Um framework para backend',
        'Uma linguagem de programação orientada a objetos',
        'Um banco de dados NoSQL',
      ],
      correctAnswer: 'Uma linguagem de programação orientada a objetos',
    ),
    QuizQuestion(
      question: 'Qual comando cria um novo projeto Flutter?',
      options: [
        'flutter start my_app',
        'dart new my_app',
        'flutter create my_app',
        'flutter init project',
      ],
      correctAnswer: 'flutter create my_app',
    ),
    QuizQuestion(
      question: 'Qual widget é usado para layouts em coluna?',
      options: ['Row', 'Stack', 'Column', 'ListView.builder'],
      correctAnswer: 'Column',
    ),
    QuizQuestion(
      question: 'Qual método é chamado quando um StatefulWidget é criado?',
      options: ['initState()', 'build()', 'dispose()', 'createState()'],
      correctAnswer: 'initState()',
    ),
    QuizQuestion(
      question: 'O que o comando "hot reload" faz?',
      options: [
        'Reinicia totalmente o app',
        'Apaga o cache do projeto',
        'Atualiza o código em execução sem perder estado',
        'Compila o app para produção',
      ],
      correctAnswer: 'Atualiza o código em execução sem perder estado',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepPurpleAccent,
        title: Text(
          "Olá, ${widget.user.name}",
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: EdgeInsets.all(16),
            child: Text("Your Quiz Questions:"),
          ),

          Expanded(
            child: ListView.builder(
              itemCount: quizData.length,
              itemBuilder: (BuildContext context, int index) {
                // alterna a posição esquerda dos botões
                double leftMargin;
                switch (index % 5) {
                  case 0:
                    leftMargin = 160;
                    break;
                  case 1:
                    leftMargin = 240;
                    break;
                  case 2:
                    leftMargin = 180;
                    break;
                  case 3:
                    leftMargin = 100;
                    break;
                  default:
                    leftMargin = 120;
                }

                return Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: ButtonWithIcon(
                    icon: Icons.star_rounded,
                    margin: leftMargin,
                    onPressed: () {},
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
