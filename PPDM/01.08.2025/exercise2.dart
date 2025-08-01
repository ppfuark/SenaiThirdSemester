import 'dart:io';

void main() {
  print("Enter your name:");
  String name = stdin.readLineSync()!;

  double sum = 0;

  for (int i = 1; i <= 3; i++) {
    double salary;
    while (true) {
      print("enter your salary $i:");
      salary = double.parse(stdin.readLineSync()!);
      if (salary >= 0) {
        break;
      } else {
        print("please enter a positive value.");
      }
    }
    sum += salary;
  }

  double average = sum / 3;

  print("hello, $name!");
  print("your average salary is: \$${average.toStringAsFixed(2)}");

  if (average >= 5000) {
    print("excellent salary.");
  } else if (average >= 3000) {
    print("good salary.");
  } else if (average >= 1500) {
    print("not bad.");
  } else {
    print("below ideal.");
  }
}
