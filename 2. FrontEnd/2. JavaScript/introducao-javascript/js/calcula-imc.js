var titulo = document.querySelector('.titulo'); // Realizando uma busca no HTML através de uma classe
titulo.textContent = 'Aparecida Nutricionista'; // Alterando o conteúdo

//buscando a informação do paciente e as informações para cálculo do IMC através do identificador e da classe
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    /* propriedade 'length' que mostra a quantidade de elementos do objeto */

    var paciente = pacientes[i];
    // dentro da consulta da variável paciente, é buscado a informação sobre o peso e a altura
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    // variável que busca o local onde se mostra o IMC do paciente
    var tdImc = paciente.querySelector('.info-imc');

    // ? verificação das informações de peso e altura
    var pesoEhValido = validaPeso(peso); // true or false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log('Peso inválido!');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido'); /* adicionando uma classe através do CSS - para que a manipulação de estilos seja feita no lugar correto */
    }

    if (!alturaEhValida) {
        console.log('Altura inválida!');
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        // criação da variável imc para o cálculo utilizando as variáveis peso e altura
        var imc = calculaImc(peso,altura);
        // atualizando o valor do campo IMC da tabela com o valor cálculado
        tdImc.textContent = imc;
    }
}

// criando função que valida peso e altura
function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

// função criada para ser reutilizada em outro arquivo .js
function calculaImc(peso, altura) { 
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}