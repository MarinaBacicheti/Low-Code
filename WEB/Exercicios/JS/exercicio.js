//let notaFinal = prompt('Digite uma nota de 0 a 100:');
//    if (notaFinal < '50'){
//        alert('reprovado');
//    }
//    else if (notaFinal > '50' && notaFinal < '79'){
//            alert('Aprovado');
//    } else {
//            alert('Aprovado com Distinção');
//        }

let nomeUser = prompt('Insira o seu nome:');
let idadeUser = prompt('Insira a sua idade:');

if (idadeUser < 18) {
    alert('Acesso negado');
} else { //bloco de código para utilizadores com mais de 18 anos
    alert('Acesso permitido');
    let menu = prompt('Bom dia, ' + nomeUser + ' Informe a operação desejada: \n  1- Ver Saldo \n  2- Levantar dinheiro \n  3- Depositar dinheiro');

    switch (menu) {
        case '1':
            alert('Saldo = 1.000 euros!');
            break
        case '2':
            let valor = prompt('Qual o valor a levantar?');
            alert("levantou " + valor+ ", tem disponível " + parseInt(1000 - valor));
            break
        case '3':
            let deposito = prompt('Qual o valor a depositar?');
            if (deposito = 600) {
                alert('Deposito de 600 euros efetuado.');
            }else {
                alert('Acesso negado');
            }

    }

}







