// * Criando função que adiciona outros pacientes no formulário

// Adicionando função ao clique do botão
var botaoAdicionar = document.querySelector('#adicionar-paciente'); // variável para chamar um objeto do mundo HTML através do document.querySelector
botaoAdicionar.addEventListener('click', function (event) { // função que tira o padrão que é recarregar a página
    event.preventDefault();

    var form = document.querySelector('#form-adiciona'); // tendo acesso do formulário presente no HTML

    // > chamando a função com os dados do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form); // esse objeto paciente obtém as propriedades do paciente do formulário

    // > chamando a função monta <tr> e <td>
    var pacienteTr = montaTr(paciente);

    // adicionando pacienteTr à '#tabela-pacientes'
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset(); // limpa os campos do formulário após adicionar os dados de um paciente

});

function obtemPacienteDoFormulario(form) {
    
    // criando um objeto -> utilizando as chaves {}
    // criação dos objetos que buscam o valor dos inputs (através do 'name') no formulário HTML
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente) {

    // função para criar um elemento através do JavaScript para o mundo HTML
    var pacienteTr = document.createElement('tr'); // passando o nome da tag que se quer criar no HTML -> <tr></tr>
    pacienteTr.classList.add('paciente'); // adicionado a classe 'paciente' à <tr> criada

    // appendChild -> coloca os elementos como filho de outro no mundo HTML
    // adicionando a função montaTd() dentro do appendChild, para diminuir o número de código (não precisando cria uma variável)
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;

}

// função de criação dos <td> para adicionar a classe
function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}