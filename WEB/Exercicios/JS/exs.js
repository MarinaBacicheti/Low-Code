//let myLuckyNumber = 4

//let myName = "Marina Tomaszewski"

//alert('Meu nome é '+ myName+" e meu número preferido é " +myLuckyNumber)

//const MESSAGE= "   TASTE THE RAINBOW!  ";

//let whisper = MESSAGE.toLowerCase().trim();

//alert(whisper);

//let fullName = "Marina Bacicheti";

//Procurar pelo index onde iremos fazer o 'corte'

//let cutIndex = fullName.indexOf(' ');

//usando o método slice para partir o nome completo
//let firstName = fullName.slice(0, cutIndex);
//let lastName = fullName.slice(cutIndex +1);

//alert(lastName);

//Substituir o nome

//const word = "skateboard";

//let facialHair = word.slice(5).replace("o", "e");
//alert(facialHair);

//let firstName = prompt('Qual é o seu primeiro nome?');
//let lastName = prompt('Qual é o seu último nome?');

//alert('Ola '+firstName +' ' +lastName);

//Condicionais
let weekDay = prompt('Que dia da semana é hoje?').toLocaleLowerCase().trim();
  //  if (weekDay == 'segunda'|| weekDay == 'segunda-feira'){
    //    alert('Força para esta semana!');
    //} else if(weekDay == 'quarta' || weekDay == 'quarta-feira'){
     //   alert('Chegamos ao meio da semana');
    //} else{
     //   alert('Já faltou mais para o fim de semana!');
    //}

//Condicionais switch case

switch(weekDay) {
    case 'segunda':
    case 'segunda-feira':
        alert("é segunda");
        break;
    case 'terça':
    case 'terça-feira':
        alert("é terça");
        break;
    case 'quarta':
    case 'quarta-feira':
        alert("é quarta");
        break;
    case 'quinta':
    case 'quinta-feira':
        alert("é quinta");
        break;
    case 'sexta':
    case 'sexta-feira':
        alert("é sexta");
        break;
    case 'sabado':
    case 'domingo':
        alert("é fim de semana");
        break;
        default:
            alert('dia inválido')
    }











