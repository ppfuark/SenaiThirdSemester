import 'dart:io';

void main(){
  print("Digite sua idade atual");
  String? input = stdin.readLineSync();
  int currentAge = int.parse(input!);
  int nextAge = currentAge + 1;

  print("Current Age: $currentAge, next Year Age: $nextAge");
}