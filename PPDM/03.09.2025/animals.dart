class Animal {
  String nome;
  int idade;

  Animal({required this.nome, required this.idade});

  void fazerSom() {
    print("Som de animal");
  }
}

class Cachorro extends Animal {
  String? raca;

  Cachorro({required String nome, required int idade, this.raca})
      : super(nome: nome, idade: idade);

  @override
  void fazerSom() {
    print("Au au!");
  }
}

class Gato extends Animal {
  String? cor;

  Gato({required String nome, required int idade, this.cor})
      : super(nome: nome, idade: idade);

  @override
  void fazerSom() {
    print("Miau!");
  }
}

void main() {
  var cachorro = Cachorro(nome: "Rex", idade: 3, raca: "Labrador");
  var gato = Gato(nome: "Mimi", idade: 2, cor: "Branca");

  cachorro.fazerSom();
  print("Nome: ${cachorro.nome}, Idade: ${cachorro.idade}, Raça: ${cachorro.raca}");

  gato.fazerSom();
  print("Nome: ${gato.nome}, Idade: ${gato.idade}, Cor: ${gato.cor}");
}
