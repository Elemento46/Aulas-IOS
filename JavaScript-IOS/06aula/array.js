let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

//length = Comprimento
//Númeral não contem o 11
//let numeros2 = numeros.push('11')
//Adicionamos o númeral 11 por meio do método .push(), que adiciona um novo item ao final da array
//console.log(numeros);
//Exibiu na tela a array atualizada
//let numeros3 = numeros.pop('11')
//Criamos um novo array onde armazenamos o 11 que veio da Array numeros utilizando o método .pop(), que retira o último item da array e armazena em outra variável

numeros.splice(0, 1);
//Utilizando o método splice(), retiramos o valor "1" da array, sendo que o valor da esquerda a posição do item da array, e o valor da direita a quantidade de itens que vai retirar da array
console.log(numeros);
console.log(numeros.length);