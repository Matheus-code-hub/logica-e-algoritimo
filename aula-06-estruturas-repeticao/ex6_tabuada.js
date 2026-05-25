// rodas rpm install prompt-sync

//importar o modulo (para roas algoritomo no terminal)
const prompt = require ('prompt-sync')();

// Titulo
console.log ('--- Tabuada ---')
console.log ("")

//pergunta (Qual tabuada gerar)
let numero = Number (prompt('Digite um número para gerar a tabada'))

//laço para gerar a tabuada 
for(let i = 1 ; i <= 10; i++){
    console.log (numero + " x " + i + " = " + (numero * i))
}