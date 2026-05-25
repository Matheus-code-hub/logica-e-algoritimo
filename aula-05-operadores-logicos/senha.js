// Instrução para poder rodar
// npm install prompt-sync

// Importar módulo
const prompt = require('prompt-sync') ();

// Logica 
let nomeUsuario = prompt("Infome o nome do usuario: ");
let senha = prompt("Informe a senha: ");
console.log(""); // linha em branco

// Reerencia 
let loginBanco = "matheus";
let senhaBanco = "123"; 

// condicional SE + E
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizado!");
} else {
    console.log("Acesso negado!");
}