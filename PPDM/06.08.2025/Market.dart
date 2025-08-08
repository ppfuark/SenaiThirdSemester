import 'dart:io';

void market() {
  print("List of products: ");
  Map<String, double> items = {
    "potato": 5.5,
    "apple": 3.2,
    "banana": 2.8
  };

  int index = 1;
  items.forEach((key, value) {
    print("$index. $key - \$${value.toStringAsFixed(2)}");
    index++;
  });

  stdout.write("Type your CPF: ");
  String? cpf = stdin.readLineSync();

  List<Map<String, double>> cart = [];
  double total = 0.0;

  String? option = "1";
  while (option == "1" || option!.toLowerCase() == "yes") {
    stdout.write("Enter product name to add (e.g., apple): ");
    String? name = stdin.readLineSync()?.toLowerCase();

    if (items.containsKey(name)) {
      double price = items[name]!;
      cart.add({name!: price});
      total += price;
      print("Product added: $name - \$${price.toStringAsFixed(2)}");
    } else {
      print("Product not found.");
    }

    print("\nWant to add another product? \n1. Yes \n2. No");
    stdout.write("Choose: ");
    option = stdin.readLineSync();
  }

  print("\nItems bought:");
  for (var item in cart) {
    String name = item.keys.first;
    double price = item[name]!;
    print("- $name: \$${price.toStringAsFixed(2)}");
  }

  print("Total: \$${total.toStringAsFixed(2)}");

  int paymentOption = 0;
  while (paymentOption != 1 && paymentOption != 2 && paymentOption != 3) {
    print("\nChoose payment method:");
    print("1 - Cash (10% discount)");
    print("2 - Card (10% interest)");
    print("3 - Pay Later (15% interest)");
    stdout.write("Option: ");
    String? input = stdin.readLineSync();
    paymentOption = int.tryParse(input ?? "") ?? 0;
  }

  double finalTotal = total;

  if (paymentOption == 1) {
    finalTotal *= 0.90;
    print("You chose Cash. 10% discount applied.");
  } else if (paymentOption == 2) {
    finalTotal *= 1.10;
    print("You chose Card. 10% interest added.");
  } else if (paymentOption == 3) {
    finalTotal *= 1.15;
    print("You chose Pay Later. 15% interest added.");
  }

  print("\nFinal total: \$${finalTotal.toStringAsFixed(2)}");
  print("Thank you for shopping! CPF: $cpf");
}

void main() {
  market();
}
