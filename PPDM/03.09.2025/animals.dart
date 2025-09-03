import 'dart:io';

class Animal {
  String name;
  int age;

  Animal({required this.age, required this.name});

  void makeSound(){
    print("Make a sound");
  }
}

class Dog extends Animal {
  String race;

  Dog(String name, int age, {required this.race}) :  super(age: age, name: name);
  
  @override
  void makeSound(){
    print("Au Au");
  }
}

class Cat extends Animal {
  String? color;

  Cat(String name, int age, {this.color}) :  super(age: age, name: name);
  
  @override
  void makeSound(){
    print("Miau");
  }
}