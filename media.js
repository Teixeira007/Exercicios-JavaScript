// Nome do aluno- nota1 - nota2 - media- aprovado/reprovado

alunos = ["Vinicius", "Paulo", "Gabriel", "Rafael", "Fhelipe", "José"]
nota1 = [8, 8, 9, 7, 7, 6]
nota2 = [9, 9.6, 10, 8, 8.4, 5]

function media(nota1, nota2){
    return (nota1 + nota2) / 2 
}

function passou(me){
    if (me >= 7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

for (var i in alunos){
    n1 = nota1[i]
    n2 = nota2[i]
    me = media(n1,n2)
    console.log(`${alunos[i]} - ${n1} - ${n2} - ${me} - ${passou(me)} `)
}