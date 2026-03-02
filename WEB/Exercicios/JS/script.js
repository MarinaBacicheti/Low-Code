 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
 //primeira linha de código de Javascript
//let firstCode = 'Bom dia';
//let className = 'Low Code';
//let number = 9;


//Reassignar um novo valor à variável
//className = 'Design UI/UX';

//Concatenar variáveis
//alert(className+ '--' + firstCode+ '!')
//number = 8;

//Forma alternativa de concatenar variáveis
//alert(`${className}:${firstCode}!`)


//if/else : validar se número é par ou impar e informar
//se for par:

//if(number % 2 == 0){
//    alert("Número par");

//} else {
//    alert("Número impar")

//}

//let number1 =16;
//let number2 ="16";

//alert(number1 == number2)

//let firstName = "Marina";
//let lastName = "Bacicheti";

//alert('Olá ' +firstName+ ' '+lastName[0]+ '.');

//alert(firstName.toUpperCase().trim())

//variável undefinied
//alert(hello)

//tipo de dados null
//let hello = null;
//alert(hello);

//alert
//alert('Olá eu sou um alerta!');

//console.log()
//console.log('estou logado na consola e sou amigo dos programadores');

//perguntar algo ao user
//let userName = prompt('Qual o seu nome?');

//console.log('Ola programador '+userName);

//Array de strings
//let alunos = ['Maria Cardoso', ' Bruno Azevedo', ' Beatriz Afonso', ' Marina Tomas' ];
//alert(alunos);
//Array de números
//let notas = [20, 15, 9, 30];

//Array com vários tipos de dados
//let mixedArray = ['Cesae', 15, true, false];

//alert(alunos[2] + ' tem nota ' +notas[2]);

//alunos[1] = ' Bruno Silva';


//let index = prompt('Qual o index a alterar? \n 0 \n 1 \n 2 \n 3');
//let newName = prompt('Qual é o novo nome?');

//alunos[index] = newName;

//alert(alunos);

//Adicionar no fim do array
//let addName = prompt('Qual o novo nome a inserir?');
//alunos.push(addName);
//alert(alunos);


//Remover do início

//alunos.shift();
//alert(alunos);

//let courses = [['css', 'html'], 'base de dados', ['funções', 'tipos de dados', 'ciclos'],];
//alert(courses[1]);

//let meals = ["Arroz e Feijão", "Lasanha", "Ramen", "Pizza", "Salada de feijão frade", "francesinha"];

//let menu = (meals[getRandomInt(meals.length)]);

//alert('O prato do dia é ' +menu);

//Object Literals

//let course = {
 //   cname: 'Programador Low Code',
 //   responsible: 'Ines Castro',
 //   hours: 1100,
 //   modules: ['Programação Web', ' Algoritmia ', ' Ingles']
//};

//alert(course.modules);

//let addModule = prompt('Qual módulo quer acrescentar?');

//course.modules.push(addModule);
//alert(course.modules);


//course.hours = 1150;

//alert('O curso de ' +course.cname+ ' tem '+course.hours+'h e o modulo mais importante é '+course.modules[1]);

let pass = prompt('Insira uma password com pelo menos 4 caracteres:');

 while (pass.length < 4){
  pass = prompt('A pass não tem pelo menos 4 caracteres. Insira uma password com pelo menos 4 caracteres.')
 };
  alert('Password OK');