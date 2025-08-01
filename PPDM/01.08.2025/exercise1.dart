import 'dart:io';

void main(){
  print("Type first number: ");
  int num1 = int.parse(stdin.readLineSync()!);
  
  print("Type second number: ");
  int num2 = int.parse(stdin.readLineSync()!);
  
  print("Type second number: ");
  int num3 = int.parse(stdin.readLineSync()!);
  
  print("Type second number: ");
  int num4 = int.parse(stdin.readLineSync()!);
  
  print("Type second number: ");
  int num5 = int.parse(stdin.readLineSync()!);

  int sum = num1 + num2 + num3 + num4 + num5;

  double average = sum/5;

  if (average >= 5 ){
    print("Passed!");
  } else if ( average > 4){
    print("Recuperation!");
  } else{
    print("Reproved!");
  }

  sum = 0;
  average = 0;

  for (int i = 1; i < 6; i++){
    print("Type number $i: ");
    int num = int.parse(stdin.readLineSync()!);

    sum += num;
  }
  average = sum/5;

  if (average >= 5 ){
    print("Passed!");
  } else if ( average > 4){
    print("Recuperation!");
  } else{
    print("Reproved!");
  }
}