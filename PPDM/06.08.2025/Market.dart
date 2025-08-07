import 'dart:io';

void market(){  
  print("List of products: ");
  List items = [{"potato":"11"}, {"apple":"11"}, {"banana":"11"}];
  for (int i = 1; i < items.length+1; i++){
    print(items[i-1]);
  }
  stdout.write("Type your CPF: ");
  String? cpf = stdin.readLineSync();

  print("Want to add a product? \n 1. Yes \n 2. No");
  stdout.write("Choose: ");
  String? option = stdin.readLineSync();

  while(option == "1" || option!.toLowerCase() == "yes"){

  }

}

void main(){
  market();
}