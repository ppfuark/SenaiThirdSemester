import 'package:falai/models/user.dart';
import 'package:falai/view_model/user_view_model.dart';
import 'package:flutter/material.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final _userNameController = TextEditingController();
  final _userAgeController = TextEditingController();
  final _userPasswordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    _userNameController.dispose();
    _userAgeController.dispose();
    super.dispose();
  }

  void _registerUser() {
    if (_formKey.currentState == null) {
      return;
    }

    if (_formKey.currentState!.validate()) {
      User user = User(
        name: _userNameController.text.trim(),
        password: _userPasswordController.text.trim(),
        age: int.parse(_userAgeController.text.trim()),
      );

      UserViewModel userViewModel = UserViewModel();
      userViewModel.addUser(user);

      Navigator.pop(
        context
      );
    }
  }

  String? _validateName(String? value) {
    if (value == null || value.trim().isEmpty) {
      return 'Please enter a username';
    }
    return null;
  }

  String? _validateAge(String? value) {
    if (value == null || value.trim().isEmpty) {
      return 'Please enter your age';
    }
    final age = int.tryParse(value.trim());
    if (age == null) {
      return 'Please enter a valid number';
    }
    if (age < 1 || age > 150) {
      return 'Please enter a valid age (1-150)';
    }
    return null;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(30.0),
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  "Welcome",
                  style: TextStyle(
                    fontFamily: "Poppins",
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.deepPurple,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  "Register to continue",
                  style: TextStyle(
                    fontFamily: 'Poppins',
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                    color: Colors.deepPurpleAccent,
                  ),
                ),
                const SizedBox(height: 28),
                TextFormField(
                  controller: _userNameController,
                  validator: _validateName,
                  decoration: const InputDecoration(
                    labelText: "Username...",
                    border: OutlineInputBorder(),
                  ),
                ),
                const SizedBox(height: 18),
                TextFormField(
                  controller: _userPasswordController,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
                    labelText: "Password...",
                    border: OutlineInputBorder(),
                  ),
                  obscureText: true,
                ),
                const SizedBox(height: 18),
                TextFormField(
                  controller: _userAgeController,
                  validator: _validateAge,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
                    labelText: "Age...",
                    border: OutlineInputBorder(),
                  ),
                ),
                const SizedBox(height: 18),
                ElevatedButton(
                  onPressed: _registerUser,
                  style: ElevatedButton.styleFrom(
                    minimumSize: const Size(double.infinity, 50),
                    backgroundColor: Colors.deepPurpleAccent,
                  ),
                  child: const Text(
                    "Sign Up",
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                ),
                SizedBox(height: 18),
                GestureDetector(
                  onTap: () {
                    Navigator.pop(context);
                  },
                  child: Text(
                    "Already have an account? Sign In ",
                    style: TextStyle(
                      fontFamily: "Poppins",
                      fontSize: 14,
                      color: Colors.deepPurple,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
