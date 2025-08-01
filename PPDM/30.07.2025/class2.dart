import 'dart:io';

void main(){
  print("Type a number");
  String? input = stdin.readLineSync();
  int age = int.parse(input!);
  print("Age: $age");

  if(age > 18){
    print("You can drive!");
  } else{
    print("You can not drive");
  }
}