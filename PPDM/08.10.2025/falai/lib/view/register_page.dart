import 'package:falai/models/user.dart';
import 'package:falai/view/home_page.dart';
import 'package:falai/view_model/user_view_model.dart';
import 'package:flutter/material.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final _usernameController = TextEditingController();
  final _ageController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    _usernameController.dispose();
    _ageController.dispose();
    super.dispose();
  }

  void _registerUser() {    
    if (_formKey.currentState == null) {
      print('Form not yet initialized');
      return;
    }

    
    if (_formKey.currentState!.validate()) {
      try {
        
        User user = User(
          name: _usernameController.text.trim(),
          age: int.parse(_ageController.text.trim()),
        );

        
        UserViewModel userViewModel = UserViewModel();
        userViewModel.addUser(user);

        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => HomePage()),
        );
      } catch (e) {
        
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Error: Please check your input - ${e.toString()}'),
            backgroundColor: Colors.red,
          ),
        );
      }
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
                  controller: _usernameController,
                  validator: _validateName,
                  decoration: const InputDecoration(
                    labelText: "Username...",
                    border: OutlineInputBorder(),
                  ),
                ),
                const SizedBox(height: 18),
                TextFormField(
                  controller: _ageController,
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
              ],
            ),
          ),
        ),
      ),
    );
  }
}
