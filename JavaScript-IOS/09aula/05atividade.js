/*Crie um loop `for` que imprima os números primos de 1 a 20. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.*/
for (let i = 2; i <= 20; i++) {
    let primo = true
    for (let j = 2; j < i; j++) {
        if (i % j ===0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(i);
    }
}