//Declarando objeto


var aluno = {
    nome: "José",
    notas: [8, 10],

    //método é uma função dentro do objeto
    media: function(){
        return (this.notas[0] + this.notas[1]) / 2
    }
}

console.log(aluno.media())



