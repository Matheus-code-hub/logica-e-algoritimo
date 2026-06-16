const prompt = require('prompt-sync')();

let precos = [];

// Entrada dos preços
for (let i = 0; i < 6; i++) {
    precos[i] = parseFloat(
        prompt(`Digite o preço do produto ${i + 1}: `)
    );
}

// Inicializa maior e menor com o primeiro valor
let maior = precos[0];
let menor = precos[0];

// Percorre o vetor para encontrar maior e menor
for (let i = 1; i < 6; i++) {
    if (precos[i] > maior) {
        maior = precos[i];
    }

    if (precos[i] < menor) {
        menor = precos[i];
    }
}

// Exibe os resultados
console.log(`\nMaior preço: R$ ${maior.toFixed(2)}`);
console.log(`Menor preço: R$ ${menor.toFixed(2)}`);