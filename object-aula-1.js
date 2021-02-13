// Declarando

var aluno = {
    nome: "Joao",
    nota: 7.6,
    matricula: "12345"
}

aluno.cpf = "82349234"   //Criando uma nova propriedade
aluno["Sobrenome"] = "Silva"  //Criando uma nova propriedade
console.log(aluno) // Visualiza todas as propriedades do objeto
console.log(aluno.nome) //visualiza apenas a propriedade selecionada

//Outra maneira de declarar um objeto

var carro = new Object({nome: "Gol"})


console.log(carro)

