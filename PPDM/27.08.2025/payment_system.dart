import 'dart:io';

void main() {
  print("=== SCHOOL CANTEEN PAYMENT SYSTEM ===");
  
  double purchaseAmount = 0;
  bool isValidAmount = false;
  
  while (!isValidAmount) {
    stdout.write("Purchase amount: ");
    String? amountInput = stdin.readLineSync();
    
    if (amountInput == null || amountInput.isEmpty) {
      print("Amount cannot be null or empty");
      continue;
    }
    
    try {
      purchaseAmount = double.parse(amountInput.replaceAll(',', '.'));
      
      if (purchaseAmount <= 0) {
        print("Must be greater than zero");
      } else {
        isValidAmount = true;
      }
    } catch (e) {
      print("must be a numeric value");
    }
  }
  
  int paymentMethod = 0;
  bool isValidPayment = false;
  final paymentMethods = {
    1: "Cash",
    2: "Debit Card",
    3: "Credit Card",
    4: "Pix"
  };
  
  while (!isValidPayment) {
    paymentMethods.forEach((key, value) => print("$key - $value"));
    
    stdout.write("Select payment method: ");
    String? paymentInput = stdin.readLineSync();
    
    try {
      paymentMethod = int.parse(paymentInput!);
      
      if (paymentMethods.containsKey(paymentMethod)) {
        isValidPayment = true;
      } else {
        print("Number must be between 1 and 4.");
      }
    } catch (e) {
      print("Invalid number");
    }
  }
  
  print("\nPurchase summary:");
  print("Amount: \$${purchaseAmount.toStringAsFixed(2)}");
  print("Payment method: ${paymentMethods[paymentMethod]}");
  print("Payment processed successfully!");
}