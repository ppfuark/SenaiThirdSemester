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
  bool _isLoading = false;

  @override
  void dispose() {
    _usernameController.dispose();
    _userPasswordController.dispose();
    super.dispose();
  }

  Future<void> _loginUser() async {
    if (_isLoading) return;

    final userName = _usernameController.text.trim();
    final userPassword = _userPasswordController.text.trim();

    if (userName.isEmpty || userPassword.isEmpty) {
      _showSnackBar("Please enter both username and password");
      return;
    }

    setState(() {
      _isLoading = true;
    });

    try {
      final UserViewModel userViewModel = UserViewModel();
      final User? user = await userViewModel.login(userName, userPassword);

      if (!mounted) return;

      if (user != null) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => HomePage(user: user,)),
        );
      } else {
        _showSnackBar("Invalid username or password");
      }
    } catch (e) {
      if (!mounted) return;
      _showSnackBar("Login failed. Please try again.");
    } finally {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  void _showSnackBar(String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
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
              const SizedBox(height: 6),
              Text(
                "Sign In to continue",
                style: TextStyle(
                  fontFamily: 'Poppins',
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: Colors.deepPurpleAccent,
                ),
              ),
              const SizedBox(height: 28),
              TextField(
                controller: _usernameController,
                decoration: const InputDecoration(
                  labelText: "Username...",
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 18),
              TextField(
                controller: _userPasswordController,
                decoration: const InputDecoration(
                  labelText: "Password...",
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
              ),
              const SizedBox(height: 18),
              ElevatedButton(
                onPressed: _isLoading ? null : _loginUser,
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurpleAccent,
                  minimumSize: const Size(double.infinity, 50),
                ),
                child: _isLoading
                    ? const SizedBox(
                        height: 20,
                        width: 20,
                        child: CircularProgressIndicator(
                          color: Colors.white,
                          strokeWidth: 2,
                        ),
                      )
                    : Text(
                        "Log In",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
              ),
              const SizedBox(height: 18),
              GestureDetector(
                onTap: _isLoading
                    ? null
                    : () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const RegisterPage(),
                          ),
                        );
                      },
                child: Text(
                  "Don't have an account? Sign Up",
                  style: TextStyle(
                    fontFamily: "Poppins",
                    fontSize: 14,
                    color: _isLoading ? Colors.grey : Colors.deepPurple,
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
