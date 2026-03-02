function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//let fruit = ['Morango', ' Abacaxi', ' Banana', ' Uva', ' Laranja'];

//let menu = (fruit[getRandomInt(fruit.length)]);
//alert(' A fruta do dia é ' +menu);
//alert(fruit);

//let addFruit = prompt('Qual é a sua futa preferida?' );

//fruit.push(addFruit);
//alert(fruit);



//let numeros = [10, 20, 30]
//alert(numeros);
//numeros.push(40);
//alert(numeros);
//numeros.unshift(0);
//alert(numeros);
//numeros.pop();
//alert(numeros);


//let cores = ['azul', ' amarelo', ' vermelho'];
//alert(cores);
//cores[1] = ' rosa';
//alert(cores);
//alert("Primeira cor: " + cores[0]);
//alert("Última cor: " + cores[cores.length - 1]);

//let products = ["telemóvel", " Tablet", " PC", " Monitor"];
//alert(products)
// if (products.includes(" PC")){
//   alert('Tem PC');
// } else {
//   alert('Não tem PC');
// }


let randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(randomNumber);
let aleatory = (randomNumber[getRandomInt(randomNumber.length)]);
    if (aleatory <= '3') {
        alert('Número baixo.')
    } else if (aleatory >= '4' && aleatory <= '7') {
        alert('Número médio.');
    } else {
        alert('Número alto.')
    }
    alert(' O número do dia é ' + aleatory);



