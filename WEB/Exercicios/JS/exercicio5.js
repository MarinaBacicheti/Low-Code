
let shopping = ['manga',' abacaxi',' leite',' arroz',' feijão'];
alert(shopping);
let fim = 'còdigo';

let addItens = prompt('Qual produto quer adicionar? Caso não queira mais adicionar, digite a palavra código');
        while (addItens != fim){
        shopping.push(addItens);       
        
    } 

alert('A lista final é '+shopping);