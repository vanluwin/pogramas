//Questão 1

class Conta{
    constructor(saldo){
        this._saldo = saldo;
    }

    saque(){
        console.log('Realizar saque');
    }

    deposito(){
        console.log('Realizar deposito');
    }

    exibirSaldo(){
        console.log('Saldo: ' + this._saldo );
    }
}

//Questão 2 

class Calculadora{
    static somar(n1, n2){
        console.log('Soma dos numeros é: ' + (n1+n2));
    }
}

//Calculadora.somar(12, 13);

// Questão 3 

class Funcionario{
    constructor(salario){
        this.salario = salario;
    }

    calcularSalario(){
        this.salario += 100;
    }

    exibirSalario(){
        console.log(this.salario);
    }
}

class Programador extends Funcionario {
    calcularSalario(){
        this.salario += 300;
    }
}

const a = new Funcionario(1000);
const b = new Programador(1000);
/*
console.log('Funcionario: ');
a.calcularSalario();
a.exibirSalario();

console.log('Programador: ');
b.calcularSalario()
b.exibirSalario();
*/
// ------------------------------------------

var nostra = require('nostra');

var fortune = nostra.generate();

console.log(fortune);