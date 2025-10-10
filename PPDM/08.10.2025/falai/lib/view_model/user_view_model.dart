import 'package:falai/models/user.dart';
import 'package:falai/services/database_service.dart';
import 'package:flutter/material.dart';

class UserViewModel extends ChangeNotifier {
  final DatabaseService _databaseService = DatabaseService.instance;

  Future<List<User>?> getUsers() async {
    final db = await _databaseService.database;
    final data = await db.query(_databaseService.userTableName);

    List<User> users = data
        .map(
          (e) => User(
            name: e['name'] as String,
            age: e['age'] as int,
            experience: e['experience'] as int,
            whyStudy: e['whyStudy'] as String,
            password: e['password'] as String,
          ),
        )
        .toList();
    return users;
  }

  void addUser(User user) async {
    final db = await _databaseService.database;

    await db.insert(_databaseService.userTableName, {
      _databaseService.userNameColumnName: user.name,
      _databaseService.userAgeColumnName: user.age,
      _databaseService.userExperienceColumnName: user.experience,
      _databaseService.userWhyStudyColumnName: user.whyStudy,
      _databaseService.userPasswordColumnName: user.password,
    });
  }

  Future<User?> login(String userName, String userPassword) async {
    final db = await _databaseService.database;

    List<Map<String, dynamic>> users = await db.query(
      "users",
      where: 'name = ?',
      whereArgs: [userName],
    );

    if (users.isNotEmpty) {
      Map<String, dynamic> userData = users.first;

      String storedPassword = userData['password'];

      if (storedPassword == userPassword ) {
        return User(
          name: userData['name'],
          password: userData['password'],
          age: userData['age'],
          experience: userData['experience'],
          whyStudy: userData['why_study'],
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
