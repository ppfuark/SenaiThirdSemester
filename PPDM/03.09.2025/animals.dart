import 'dart:convert';
import 'dart:html_common';
import 'dart:io';

class Animal {
  String name;
  String race;

  Animal({required this.race, required this.name});

  void makeSound() {
    print("Make a sound");
  }
}

class Dog extends Animal {
  String? color;

  Dog(String name, String race, {required this.color})
    : super(race: race, name: name);

  @override
  void makeSound() {
    print("Au Au");
  }
}

void menu() {
  int option = 0;

  print("--- Welcome to ZOOMANGE ---");
  void menu() {
    print("What you want to do?");
    print("1. Add a animal");
    print("2. Remove a animal");
    print("3. Update a animal");
    print("4. Filter animal(s)");
    print("5. Exit");
    option = int.parse(stdin.readLineSync()!);
  }

  menu();

  while (option != 5) {
    switch (option) {
      case 1:
        print("Which animal you want to create?");
        print("1. Dog");
        print("2. ");
        print("3. ");
        int addAnimalOption;
        addAnimalOption = int.parse(stdin.readLineSync()!);

        switch (addAnimalOption) {
          case 1:
            stdout.write("Dog's name: ");
            String? dogName = stdin.readLineSync();
            
            stdout.write("Dog's name: ");
            String? dogRace = stdin.readLineSync();

        }
    }
  }
}
