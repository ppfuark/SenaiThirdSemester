class Conta {
  String nomeTitular;
  double saldoInicial;
  double? investimento;

  Conta({required this.nomeTitular, required this.saldoInicial, this.investimento});

  void mostrarDados() {
    print("Titular: $nomeTitular, Saldo: $saldoInicial, Investimento: ${investimento ?? "Nenhum"}");
  }
}

class ContaCorrente extends Conta {
  double? limiteChequeEspecial;

  ContaCorrente({
    required String nomeTitular,
    required double saldoInicial,
    double? investimento,
    this.limiteChequeEspecial,
  }) : super(nomeTitular: nomeTitular, saldoInicial: saldoInicial, investimento: investimento);

  @override
  void mostrarDados() {
    super.mostrarDados();
    print("Limite Cheque Especial: ${limiteChequeEspecial ?? "Nenhum"}");
  }
}

class ContaPoupanca extends Conta {
  double taxaRendimento;

  ContaPoupanca({
    required String nomeTitular,
    required double saldoInicial,
    required this.taxaRendimento,
    double? investimento,
  }) : super(nomeTitular: nomeTitular, saldoInicial: saldoInicial, investimento: investimento);

  void aplicarRendimento() {
    saldoInicial += saldoInicial * taxaRendimento;
    print("Novo saldo após rendimento: $saldoInicial");
  }

  @override
  void mostrarDados() {
    super.mostrarDados();
    print("Taxa de Rendimento: $taxaRendimento");
  }
}

void main() {
  var contaCorrente = ContaCorrente(
    nomeTitular: "João",
    saldoInicial: 1500,
    limiteChequeEspecial: 500,
  );

  var contaPoupanca = ContaPoupanca(
    nomeTitular: "Maria",
    saldoInicial: 2000,
    taxaRendimento: 0.05,
  );

  print("\n--- Conta Corrente ---");
  contaCorrente.mostrarDados();

  print("\n--- Conta Poupança ---");
  contaPoupanca.mostrarDados();
  contaPoupanca.aplicarRendimento();
}
