import 'dart:io';

// Function: Celsius to Fahrenheit
double celsiusToFahrenheit(double celsius) {
  return (celsius * 9 / 5) + 32;
}

void main() {
  stdout.write("Enter the temperature in Celsius: ");
  double celsius = double.parse(stdin.readLineSync()!);

  double fahrenheit = celsiusToFahrenheit(celsius);
  print("Temperature in Fahrenheit: ${fahrenheit.toString()}°F");
}
