import 'package:falai/data/quiz_data.dart';
import 'package:falai/models/user.dart';
import 'package:falai/view_model/user_view_model.dart';
import 'package:flutter/material.dart';

class QuizPage extends StatefulWidget {
  final User user;
  final QuizQuestion quizQuestion;
  const QuizPage({super.key, required this.quizQuestion, required this.user});

  @override
  State<QuizPage> createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  late Color clickedContainerColor ;



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
        children: [
          Text(widget.quizQuestion.question, style: TextStyle(),),
          GridView.count(crossAxisCount: 2, children: List.generate(widget.quizQuestion.options.length, (index){
            return GestureDetector(
              onTap: (){
                if (widget.quizQuestion.options[index]==widget.quizQuestion.correctAnswer){
                  UserViewModel userViewModel = UserViewModel();
                  User user = widget.user;
                  userViewModel.updateUser(User(name: user.name, password: user.password, age: user.age, experience: user.experience + 100, whyStudy: user.whyStudy));

                  clickedContainerColor = const Color.fromARGB(255, 165, 214, 167);
                }
                else{
                  clickedContainerColor = const Color.fromARGB(255, 239, 154, 154);
                }
              },
              child: Container(
                decoration: BoxDecoration(
                  border: Border.all()
                ),
                child: Text(widget.quizQuestion.options[index]),
              ),
            );
          }),)
        ],
      ),
    );
  }
} 