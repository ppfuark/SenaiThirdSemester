import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

class DatabaseService {
  static Database? _db;
  static final DatabaseService instance = DatabaseService._constructor();

  DatabaseService._constructor();

  String _userTableName = "user";
  String _userNameColumnName = "name";
  String _userAgeColumnName = "age";
  String _userExperienceColumnName = "experience";
  String _userWhyStudyColumnName = "why_study";

  get userTableName => _userTableName;

  set userTableName(value) => _userTableName = value;

  get userNameColumnName => _userNameColumnName;

  set userNameColumnName(value) => _userNameColumnName = value;

  get userAgeColumnName => _userAgeColumnName;

  set userAgeColumnName(value) => _userAgeColumnName = value;

  get userExperienceColumnName => _userExperienceColumnName;

  set userExperienceColumnName(value) => _userExperienceColumnName = value;

  get userWhyStudyColumnName => _userWhyStudyColumnName;

  set userWhyStudyColumnName(value) => _userWhyStudyColumnName = value;

  Future<Database> get database async {
    if (_db != null) return _db!;
    _db = await getDatabase();
    return _db!;
  }

  Future<Database> getDatabase() async {
    final databaseDirPath = await getDatabasesPath();
    final databasePath = join(databaseDirPath, "users.db");
    final database = await openDatabase(
      databasePath,
      version: 1,
      onCreate: (db, version) async {
        await db.execute('''
            CREATE TABLE $_userTableName (
              $_userNameColumnName TEXT PRIMARY KEY NOT NULL,
              $_userAgeColumnName INTEGER NOT NULL,
              $_userExperienceColumnName INTEGER NOT NULL,
              $_userWhyStudyColumnName TEXT NOT NULL
            )
        ''');
      },
    );
    return database;
  }
}
