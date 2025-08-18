import 'dart:io';

bool isAdult(int age) {
  return age >= 18;
}

void main() {
  stdout.write("Enter your age: ");
  int age = int.parse(stdin.readLineSync()!);

  if (isAdult(age)) {
    print("You are an adult.");
  } else {
    print("You are a minor.");
  }
}
