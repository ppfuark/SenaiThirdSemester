class User {
  late String name;
  late int age;
  late int experience;
  late String? whyStudy;

  User({
    required this.name,
    required this.age,
    this.whyStudy = "Default",
    this.experience = 0,
  });

  @override
  String toString() {
    return 'User(name: $name, age: $age, experience: $experience, whyStudy: $whyStudy)';
  }
}
