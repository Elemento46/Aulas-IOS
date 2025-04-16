let cafe = false
let trabalhar = false
let dormir = false

if (cafe || trabalhar || dormir) {
    console.log("Fez o certo!");
} else {
    console.log("A pessoa está desvivida");
}

// Por conta das 3 variáveis serem falsas, || compara as 3 variáveis e informou a resposta.

// O operador ||(ou) compara se alguma das condições é verdadeira, se alguma for verdadeira ele executa tudo