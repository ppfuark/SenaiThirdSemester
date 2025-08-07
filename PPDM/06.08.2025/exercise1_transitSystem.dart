import 'dart:io';

String transitSystem() {
  stdout.write("Driver name: ");
  String? name = stdin.readLineSync();

  stdout.write("Driver velocity (km/h): ");
  int velocity = int.parse(stdin.readLineSync()!);

  String infraction = "";

  if (velocity > 100) {
    infraction = "Serious infraction";
  } else if (velocity > 80) {
    infraction = "Medium infraction";
  } else if (velocity > 60) {
    infraction = "Minor infraction";
  } else {
    infraction = "No infraction";
  }

  print("1: 1x - 10% discount");
  print("2: 2x - No discount");
  print("3: 3x - 10% tax");
  stdout.write("Chose a payment methods: ");

  int paymentType = int.parse(stdin.readLineSync()!);

  stdout.write("Fine value: ");
  int fine = int.parse(stdin.readLineSync()!);

  double finalAmount = fine.toDouble();
  String installmentInfo = "";


  switch (paymentType) {
    case 1:
      finalAmount = fine * 0.9;
      installmentInfo = "1x - 10% discount";
      break;
    case 2:
      installmentInfo = "2x - No discount";
      break;
    case 3:
      finalAmount = fine * 1.1;
      installmentInfo = "3x - 10% tax";
      break;
    default:
      print("Invalid payment option");
      return "";
  }

  print("\n--- Result ---");
  print("Driver: $name");
  print("Velocity: $velocity km/h");
  print("Infraction: $infraction");
  print("Fine: R\$${fine.toStringAsFixed(2)}");
  print("Payment: $installmentInfo");
  print("Total to pay: R\$${finalAmount.toStringAsFixed(2)}");

  return infraction;
}

void main() {
  transitSystem();
}
