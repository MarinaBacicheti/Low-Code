// Exercício de WHILE
//let products = {
//    pnome: 'lapis',
//    inStock: true,
//    price: 1.99,
//    colors: ['vermelho', ' azul', ' verde']
//};

//products.price = 2.55;

//alert(products.price);
//alert('Cor '+products.colors[2]);

let wordPass = 'aqui123';

let question = prompt('Informe a palavra-passe: ');

let tentativas = 0

while (question != wordPass && tentativas < 3){
    question = prompt('Palavra-passe errada, tente novamente.');
    tentativas++
    console.log(tentativas)
}
    if (tentativas >3){
        alert('Conta bloqueada!')
    } else {
        alert('Password correta!')

    };

    let shopping = ['manga',' abacaxi',' leite',' arroz',' feijão'];



