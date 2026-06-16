const prompt = require('prompt-sync')();

let gols = [];
let maisDeTres = 0;
let tresOuMenos = 0;

// Entrada dos dados
for (let i = 0; i < 5; i++) {
    gols[i] = parseInt(
        prompt(`Digite os gols do time ${i + 1}: `)
    );
}

// Contagem
for (let i = 0; i < 5; i++) {
    if (gols[i] > 3) {
        maisDeTres++;
    } else {
        tresOuMenos++;
    }
}

// Exibição dos resultados
console.log(`\nTimes com mais de 3 gols: ${maisDeTres}`);
console.log(`Times com 3 gols ou menos: ${tresOuMenos}`);