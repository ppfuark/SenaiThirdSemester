import 'package:falai/models/user.dart';
import 'package:flutter/material.dart';

class UserViewModel extends ChangeNotifier {
  
  User _user;
  
  UserViewModel(this._user);

  String get name => _user.name;
  int get age => _user.age;
  int get experience => _user.experience;
  String get whyStudy => _user.whyStudy;
  
  void updateUser({String? name, int? age, int? experience, String? whyStudy}) {
    if (name != null) _user.name = name;
    if (age != null) _user.age = age;
    if (experience != null) _user.experience = experience;
    if (whyStudy != null) _user.whyStudy = whyStudy;

    notifyListeners(); 
  }
}
