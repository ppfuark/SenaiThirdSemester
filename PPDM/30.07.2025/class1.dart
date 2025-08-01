import 'dart:io';

void main(){
  print("Type your name");
  String? name = stdin.readLineSync();
  print("Your name is $name");

  if (name == "pp.fuark"){
    print("good");
  } else{
    print("nah");
  }
}

