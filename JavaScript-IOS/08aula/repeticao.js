// let i = 0; - inicialização, i <= 50; - condição , i++ - incremento
// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }

/* Contador no início do array 0
   Executará enquanto i for menos que a quantidade de itens no array mangas
*/

let tiposManga = ['Palmer', 'Tommy', 'Rosa' , 'Ubá', 'Espada']

for (i = 0; i < tiposManga.length; i++) {
    console.log(`${i+1} ${tiposManga[i]}`);
}

contador = 0

// While repetirá enquanto sua comparação for verdade
while (contador <= 10) {
    console.log(contador, 'Pamonha🌽');

    if (contador == 10) {
        console.log('Compreensível! Tenha um ótimo dia');
    }
    contador++
}