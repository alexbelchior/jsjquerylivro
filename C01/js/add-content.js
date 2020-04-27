var today = new Date();                     //Cria um novo objeto Date
var hourNow = today.getHours();             //Pega a hora atual
var greeting;

//Exibe a mensagem apropriada de acordo com a hora atual.
if (hourNow > 18){
    greeting = 'Boa noite!';
}else if (hourNow > 12){
    greeting = 'Boa tarde!';
}else if (hourNow > 0){
    greeting = 'Bom dia!';
}else{
    greeting = 'Bem vindo!';
}

document.write('<h3>' + greeting + '</h3>');