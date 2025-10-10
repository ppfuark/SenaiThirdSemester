import 'package:falai/models/user.dart';
import 'package:falai/view/home_page.dart';
import 'package:falai/view/register_page.dart';
import 'package:falai/view_model/user_view_model.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _usernameController = TextEditingController();
  final _userPasswordController = TextEditingController();

  @override
  void dispose() {
    _usernameController.dispose();
    _userPasswordController.dispose();
    super.dispose();
  }

  bool _loginState(String userName, String userPassword){
    UserViewModel userViewModel = UserViewModel();
    Future<User?> user = userViewModel.login(userName, userPassword);

    Navigator.push(context, MaterialPageRoute(builder: 
    (context)=>HomePage()));
    return true;
    }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(30.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                "Welcome",
                style: TextStyle(
                  fontFamily: 'Poppins',
                  fontWeight: FontWeight.bold,
                  fontSize: 28,
                  color: Colors.deepPurple,
                ),
              ),
              SizedBox(height: 6),
              Text(
                "Sign In to continue",
                style: TextStyle(
                  fontFamily: 'Poppins',
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: Colors.deepPurpleAccent,
                ),
              ),
              SizedBox(height: 28),
              TextField(
                controller: _usernameController,
                decoration: InputDecoration(
                  labelText: "Username...",
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 18),
              TextField(
                controller: _userPasswordController,
                decoration: InputDecoration(
                  labelText: "Password...",
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
              ),
              SizedBox(height: 18),
              ElevatedButton(
                onPressed: () => {
                  _loginState(_usernameController.text, _userPasswordController.text)
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurpleAccent,
                  minimumSize: const Size(double.infinity, 50),
                ),
                child: Text(
                  "Log In",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              SizedBox(height: 18),
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => RegisterPage()),
                  );
                },
                child: Text(
                  "Don´t have an account? Sign Up ",
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
    );
  }
}