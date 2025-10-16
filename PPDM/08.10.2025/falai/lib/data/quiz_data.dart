class QuizQuestion {
  final String question;
  final List<String> options;
  final String correctAnswer;

  QuizQuestion({
    required this.question,
    required this.options,
    required this.correctAnswer,
  });
}

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
    options: [
      'Row',
      'Stack',
      'Column',
      'ListView.builder',
    ],
    correctAnswer: 'Column',
  ),
  QuizQuestion(
    question: 'Qual método é chamado quando um StatefulWidget é criado?',
    options: [
      'initState()',
      'build()',
      'dispose()',
      'createState()',
    ],
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
  QuizQuestion(
    question: 'Qual desses é um widget sem estado?',
    options: [
      'StatefulWidget',
      'Container',
      'ListView.builder',
      'State',
    ],
    correctAnswer: 'Container',
  ),
  QuizQuestion(
    question: 'Em Dart, o que significa o operador "??="? ',
    options: [
      'Atribui o valor da esquerda se for nulo',
      'Compara igualdade entre dois objetos',
      'Concatena strings',
      'Cria uma função anônima',
    ],
    correctAnswer: 'Atribui o valor da esquerda se for nulo',
  ),
  QuizQuestion(
    question: 'Como declarar uma variável imutável em Dart?',
    options: [
      'let nome = "Ana";',
      'final nome = "Ana";',
      'var nome = "Ana";',
      'const nome = "Ana";',
    ],
    correctAnswer: 'final nome = "Ana";',
  ),
  QuizQuestion(
    question: 'Qual função é obrigatória no ponto de entrada de um app Dart?',
    options: [
      'init()',
      'build()',
      'main()',
      'run()',
    ],
    correctAnswer: 'main()',
  ),
  QuizQuestion(
    question: 'Qual comando executa o app Flutter em modo debug?',
    options: [
      'flutter debug',
      'flutter run',
      'flutter watch',
      'flutter start',
    ],
    correctAnswer: 'flutter run',
  ),
];
