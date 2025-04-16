// 3. Sistema de Cálculo de Média de Notas com Array

let notas = ['4','7','10','6','8','7']

let somaNotas = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5]
let media = somaNotas / 6

if (media >= 7) {
    console.log("Parabéns! Você foi aprovado.");
} else {
    console.log("Infelizmente você foi reprovado por não atingir a média de notas...");
}