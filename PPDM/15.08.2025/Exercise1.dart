import 'dart:io';

double calculateDiscount(double price, double discount) {
  double finalPrice = price - (price * (discount / 100));
  return finalPrice;
}

void main() {
  stdout.write("Enter the original price: ");
  double price = double.parse(stdin.readLineSync()!);

  stdout.write("Enter the discount percentage: ");
  double discount = double.parse(stdin.readLineSync()!);

  double finalPrice = calculateDiscount(price, discount);
  print("Final price after discount: ${finalPrice.toString()}");
}