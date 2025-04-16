/*Crie um loop `while` que gere uma sequência de Fibonacci de 10 números. A sequência começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.*/
let a = 0, b = 1, i =0;
while (i < 10) {
    console.log(a);
    [a,b] = [b, a + b];
    i++;
}
