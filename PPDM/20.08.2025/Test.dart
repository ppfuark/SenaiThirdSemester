import "dart:io";

void main() {
  String? name;
  String? cpf;

  try {
    stdout.write("Type your Name: ");
    name = stdin.readLineSync();
    
    if (name == null || (name.trim()).isEmpty) {
      print("Name cannot be empty");
      return;
    }

    stdout.write("Type your CPF: ");
    cpf = stdin.readLineSync();
    
    if (cpf == null || (cpf.trim()).isEmpty) {
      print("CPF cannot be empty");
      return;
    }
  } catch (e) {
    print("Something wrong: $e");
    return;
  }

  Map<String, dynamic> info = {
    "Products": ["Potato", "Apple", "Banana"],
    "Price": [2.0, 1.0, 0.5],
    "Stock": [5, 5, 5]
  };

  List<Map<String, dynamic>> cart = [];
  double subtotal = 0.0;

  print("\nList of Items");
  for (int i = 0; i < info["Products"].length; i++) {
    print("${i + 1}. ${info["Products"][i]} - \$${info["Price"][i]} (Stock: ${info["Stock"][i]})");
  }

  String? option = "1";
  
  while (option == "1" || option!.toLowerCase() == "yes") {
    stdout.write("\nType the number of the item: ");
    String? input = stdin.readLineSync();
    if (input == null || input.isEmpty) continue;

    int itemOption;
    try {
      itemOption = int.parse(input);
    } catch (e) {
      print("Please enter a valid number");
      continue;
    }

    if (itemOption < 1 || itemOption > info["Products"].length) {
      print("Invalid item number");
      continue;
    }

    int itemIndex = itemOption - 1;

    stdout.write("How many of ${info["Products"][itemIndex]} do you need: ");
    String? quantityInput = stdin.readLineSync();
    if (quantityInput == null || quantityInput.isEmpty) continue;

    int itemQuantity;
    try {
      itemQuantity = int.parse(quantityInput);
    } catch (e) {
      print("Please enter a valid number");
      continue;
    }

    if (itemQuantity > info["Stock"][itemIndex]) {
      print("Not enough stock! Available: ${info["Stock"][itemIndex]}");
      continue;
    }

    info["Stock"][itemIndex] -= itemQuantity;
    double itemCost = info["Price"][itemIndex] * itemQuantity;
    subtotal += itemCost;

    cart.add({
      "name": info["Products"][itemIndex],
      "price": info["Price"][itemIndex],
      "quantity": itemQuantity,
      "total": itemCost
    });

    print("Added ${itemQuantity}x ${info["Products"][itemIndex]} - \$${itemCost.toStringAsFixed(2)}");
    print("Current total: \$${subtotal.toStringAsFixed(2)}");

    stdout.write("\nType 1 to continue buying, or anything to exit: ");
    option = stdin.readLineSync();
  }

  // --- Payment ---
  print("\nPayment Methods:");
  print("1. Cash");
  print("2. Debit");
  print("3. Credit (+10% fee)");
  print("4. PIX (-5% discount)");
  stdout.write("Choose one: ");
  String? payInput = stdin.readLineSync();

  int payment = int.tryParse(payInput ?? "0") ?? 0;
  double discount = 0.0;
  double fee = 0.0;
  double total = subtotal;

  if (payment == 3) {
    fee = subtotal * 0.10;
    total += fee;
  } else if (payment == 4) {
    discount = subtotal * 0.05;
    total -= discount;
  }

  double change = 0.0;
  if (payment == 1) {
    stdout.write("Enter the amount paid: ");
    double paid = double.tryParse(stdin.readLineSync() ?? "0") ?? 0;
    if (paid < total) {
      print("Not enough money!");
      return;
    }
    change = paid - total;
  }

  // --- Receipt ---
  print("\n=== RECEIPT ===");
  print("Customer: $name");
  print("CPF: $cpf\n");

  for (var item in cart) {
    print("${item["quantity"]}x ${item["name"]} - \$${item["price"]} = \$${item["total"].toStringAsFixed(2)}");
  }

  print("\nSubtotal: \$${subtotal.toStringAsFixed(2)}");
  if (discount > 0) print("Discount: -\$${discount.toStringAsFixed(2)}");
  if (fee > 0) print("Fee: +\$${fee.toStringAsFixed(2)}");
  print("Total: \$${total.toStringAsFixed(2)}");

  switch (payment) {
    case 1:
      print("Payment: Cash");
      print("Change: \$${change.toStringAsFixed(2)}");
      break;
    case 2:
      print("Payment: Debit");
      break;
    case 3:
      print("Payment: Credit");
      break;
    case 4:
      print("Payment: PIX");
      break;
    default:
      print("Payment: Unknown");
  }

  print("\nThank you for your purchase!");
}
