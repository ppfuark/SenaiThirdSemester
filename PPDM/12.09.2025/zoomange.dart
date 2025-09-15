import 'dart:io';

abstract class Animal {
  String race;
  String name;
  String size;

  Animal({required this.name, required this.race, required this.size});

  void makeSound();
  void eat();

  String toString() {
    return "Name: $name, Race: $race, Size: $size";
  }
}

class Dog extends Animal {
  Dog(String name, String size, String race)
    : super(name: name, size: size, race: race);

  @override
  void makeSound() {
    print("Au au");
  }

  @override
  void eat() {
    print("$name is eating Dog food");
  }
}

class Cat extends Animal {
  Cat(String name, String size, String race)
    : super(name: name, size: size, race: race);

  @override
  void makeSound() {
    print("Au au");
  }

  @override
  void eat() {
    print("$name is eating Cat food");
  }
}

class Bird extends Animal {
  Bird(String name, String size, String race)
    : super(name: name, size: size, race: race);

  @override
  void makeSound() {
    print("Au au");
  }

  @override
  void eat() {
    print("$name is eating Bird food");
  }
}

List<Animal> animals = [];

void main() {
  int option = 0;

  while (option != 6) {
    print("\n--- Welcome to Zoomange ---");
    print("1. Add new animal");
    print("2. Edit animal");
    print("3. List all animals");
    print("4. Remove animal");
    print("5. Filter animals");
    print("6. Exit");

    stdout.write("\n Choose a option: ");
    option = int.parse(stdin.readLineSync()!);

    switch (option) {
      case 1:
        createAnimal();
      case 2:
        editAnimal();
      case 3:
        listAnimals();
      case 4:
        removeAnimal();
      case 5:
        filterAnimals();
      case 6:
        break;
      default:
        print("\n Invalid option!");
    }
  }
}

void createAnimal() {
  print("1. Dog");
  print("2. Cat");
  print("3. Bird");
  stdout.write("\nWhich type of animal? ");
  int animalType = int.parse(stdin.readLineSync()!);


  stdout.write("Animal Name: ");
  String animalName = stdin.readLineSync()!;

  stdout.write("Animal Size: ");
  String animalSize = stdin.readLineSync()!;

  stdout.write("Animal Race: ");
  String animalRace = stdin.readLineSync()!;

  late Animal animal;
  switch (animalType) {
    case 1:
      animal = Dog(animalName, animalSize, animalRace);
      break;
    case 2:
      animal = Cat(animalName, animalSize, animalRace);
      break;
    case 3:
      animal = Bird(animalName, animalSize, animalRace);
      break;

    default:
      print("Invalid Type!");
  }
  animals.add(animal);
}

void listAnimals() {
  if (animals.isEmpty) {
    print("\n No animals created \n");
  } else {
    for (int i = 0; i < animals.length; i++) {
      print("${i+1}. ${animals[i].name} ${animals[i].size} ${animals[i].race}");
    }
  }
}

void removeAnimal() {
  listAnimals();
  stdout.write("\n Which animal you want to remove: ");
  int optionRemoveAnimal = int.parse(stdin.readLineSync()!);

  if (optionRemoveAnimal < 0 || optionRemoveAnimal > animals.length + 1) {
    print("Invalid option");
  } else {
    animals.removeAt(optionRemoveAnimal-1);
  }
}

void editAnimal() {
  listAnimals();
  stdout.write("\n Which animal you want to edit: ");
  int optionEditAnimal = int.parse(stdin.readLineSync()!);

  if (optionEditAnimal < 0 || optionEditAnimal > animals.length + 1) {
    print("Invalid option");
  } else {
    stdout.write("New Animal Name: ");
    String animalName = stdin.readLineSync()!;

    stdout.write("New Animal Size: ");
    String animalSize = stdin.readLineSync()!;

    stdout.write("New Animal Race: ");
    String animalRace = stdin.readLineSync()!;

    animals[optionEditAnimal-1].name = animalName;
    animals[optionEditAnimal-1].race = animalRace;
    animals[optionEditAnimal-1].size = animalSize;
  }
}

void filterAnimals(){
  print("1. By Name");
  print("2. By Race");
  print("3. By Size");
  stdout.write("\nHow would you like to filter? ");
  int filterOption = int.parse(stdin.readLineSync()!);

  switch(filterOption){
    case 1:
      stdout.write("\nName: ");
      String targetName = stdin.readLineSync()!;

      List<Animal>  filteredList = animals.where((animal) => animal.name == targetName).toList();

      print("List: $filteredList");

    case 2:
      stdout.write("\nRace: ");
      String targetRace = stdin.readLineSync()!;

      List<Animal>  filteredList = animals.where((animal) => animal.race == targetRace).toList();

      print("List: $filteredList");

    case 3:
      stdout.write("\nName: ");
      String targetSize = stdin.readLineSync()!;

      List<Animal>  filteredList = animals.where((animal) => animal.size == targetSize).toList();

      print("List: $filteredList");
  }

}