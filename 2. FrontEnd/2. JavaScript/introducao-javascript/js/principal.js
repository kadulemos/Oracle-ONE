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
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log('Peso inválido!');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido'); /* adicionando uma classe através do CSS - para que a manipulação de estilos seja feita no lugar correto */
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('Altura inválida!');
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        // criação da variável imc para o cálculo utilizando as variáveis peso e altura
        var imc = peso / (altura * altura);
        // atualizando o valor do campo IMC da tabela com o valor cálculado
        tdImc.textContent = imc.toFixed(2);
    }
}

// * Criando função que adiciona outros pacientes no formulário

// Adicionando função ao clique do botão
var botaoAdicionar = document.querySelector('#adicionar-paciente'); // variável para chamar um objeto do mundo HTML através do document.querySelector
botaoAdicionar.addEventListener('click', function (event) { // função que tira o padrão que é recarregar a página
    event.preventDefault();

    var form = document.querySelector('#form-adiciona'); // tendo acesso do formulário presente no HTML

    // criação das variáveis que buscam o valor dos inputs (através do 'name') no formulário HTML
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form;
    altura.value;
    var gordura = form.gordura.value;

    // função para criar um elemento através do JavaScript para o mundo HTML
    var pacienteTr = document.createElement('tr'); // passando o nome da tag que se quer criar no HTML -> <tr></tr>

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // adicionando o conteúdo de texto das variáveis às tags <tr></tr>
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // função que coloca os elementos como filho de outro no mundo HTML
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // adicionando pacienteTr à '#tabela-pacientes'
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

});