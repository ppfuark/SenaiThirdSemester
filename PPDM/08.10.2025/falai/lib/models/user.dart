class User {
  late String name;
  late String password;
  late int age;
  late int experience;
  late String? whyStudy;

  User({
    required this.name,
    required this.password,
    required this.age,
    this.whyStudy = "Default",
    this.experience = 0,
  });

  @override
  String toString() {
    return 'User(name: $name, age: $age, experience: $experience, whyStudy: $whyStudy)';
  }

  Map<String, Object?> toMap() {
    return {'name': name, 'password': password,'age': age, 'why_study': whyStudy, 'experience': experience};
  }
}
