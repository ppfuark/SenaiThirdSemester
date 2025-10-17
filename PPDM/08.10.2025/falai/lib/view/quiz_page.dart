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
    int? _selectedIndex;
    bool _answered = false;
    bool _isCorrect = false;

    void _handleAnswer(int index) {
      if (_answered) return;

      setState(() {
        _selectedIndex = index;
        _answered = true;
        _isCorrect =
            widget.quizQuestion.options[index] ==
            widget.quizQuestion.correctAnswer;
      });

      if (_isCorrect) {
        final userViewModel = UserViewModel();
        final updatedUser = User(
          name: widget.user.name,
          password: widget.user.password,
          age: widget.user.age,
          experience: widget.user.experience + 100,
          whyStudy: widget.user.whyStudy,
        );
        userViewModel.updateUser(updatedUser);
      }

      Future.delayed(const Duration(seconds: 2), () {
        if (mounted) {
          Navigator.pop(context);
        }
      });
    }

    Color _getContainerColor(int index) {
      if (!_answered) return Colors.transparent;

      if (widget.quizQuestion.options[index] ==
          widget.quizQuestion.correctAnswer) {
        return const Color.fromARGB(255, 165, 214, 167);
      } else if (index == _selectedIndex) {
        return const Color.fromARGB(255, 239, 154, 154);
      }
      return Colors.transparent;
    }

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepPurpleAccent,
          title: Text(
            "Olá, ${widget.user.name}",
            style: const TextStyle(color: Colors.white),
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.quizQuestion.question,
                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 20),
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  children: List.generate(widget.quizQuestion.options.length, (
                    index,
                  ) {
                    return GestureDetector(
                      onTap: () => _handleAnswer(index),
                      child: Container(
                        decoration: BoxDecoration(
                          color: _getContainerColor(index),
                          border: Border.all(color: Colors.grey),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Center(
                          child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text(
                              widget.quizQuestion.options[index],
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 16),
                            ),
                          ),
                        ),
                      ),
                    );
                  }),
                ),
              ),
            ],
          ),
        ),
      );
    }
  }
