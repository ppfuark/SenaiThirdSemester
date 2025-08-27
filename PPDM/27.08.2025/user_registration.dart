import 'dart:io';

void main() {
  print("=== USER REGISTRATION SYSTEM ===");
  
  String? name;
  bool isValidName = false;
  
  while (!isValidName) {
    stdout.write("Enter your full name: ");
    name = stdin.readLineSync();
    
    if (name == null) {
      print("Name cannot be null");
    } else if (name.trim().isEmpty) {
      print("Name cannot be empty");
    } else {
      isValidName = true;
    }
  }
}