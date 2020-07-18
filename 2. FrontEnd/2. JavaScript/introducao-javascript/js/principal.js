var titulo = document.querySelector('.titulo'); // Realizando uma busca no HTML através de uma classe
titulo.textContent = 'Aparecida Nutricionista'; // Alterando o conteúdo

//buscando a informação do paciente e as informações para cálculo do IMC através do identificador e da classe
var paciente = document.querySelector('#primeiro-paciente'); 

// dentro da consulta da variável paciente, é buscado a informação sobre o peso e a altura
var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

// variável que busca o local onde se mostra o IMC do paciente
var tdImc = paciente.querySelector('.info-imc');

// ? verificação das informações de peso e altura
var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso>= 1000) {
    console.log('Peso inválido!');
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido!';
}

if(altura <= 0 || altura >= 3.00) {
    console.log('Altura inválida!');
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida!';
}

if(alturaEhValida && pesoEhValido) {
    // criação da variável imc para o cálculo utilizando as variáveis peso e altura
    var imc = peso / (altura * altura);
    // atualizando o valor do campo IMC da tabela com o valor cálculado
    tdImc.textContent = imc;
}