let p1 = document.getElementById("p1") //get-ElementById - Seleciona o elemento pelo ID
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let paragrafos = document.getElementsByClassName("paragrafo") // Seleciona os elementos pela CLASS
let todosParagrafos = document.getElementsByTagName("p") //Seleciona todas os elementos pela TAG


p1.innerHTML = "<h3>Paragrafo 1 alterado</h3>" //Alterar HTML do elemento selecionado
p2.innerText = "Paragrafo 2 alterado" // Alterar o TEXTO do elemento selecionado, exibindo o texto da página
//textContent - ALterar o TEXTO do elemento selecionado, exibindo o html da página

p1.className = "paragrafoRed" // Altera a CLASS do elemento selecionado

p3.style = "color:gray" // Atera atributo existente
MeuAtributo = p3.getAttribute("MeuAtributo") //Acessar Atributo criado que antes não era 
p3.setAttribute("MeuAtributo","Vinicius Teixeira") //Altera atributo criando
p3.setAttribute("novoAtributo","Fernandes") //Criando atributo novo