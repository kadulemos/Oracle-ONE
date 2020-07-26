
var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function() {
// XMLHttpRequest -> responsável por fazer requisições HTTP no Javascript 
    var xhr = new XMLHttpRequest();

    // O XMLHttpRequest precisa ser configurado, para dizer qual método HTTP queremos utilizar na requisição, e para qual servidor vamos enviá-la. Para configurar o XMLHttpRequest utilizamos a função .open()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    // Para pegarmos a resposta quando a requisiçao HTTP voltar precisamos colocar um escutador de evento no próprio XMLHttpRequest, escutando o evento de load
    xhr.addEventListener("load", function() {

        // selecioando o <span> -> com a classe erro-ajax
        var erroAjax = document.querySelector('#erro-ajax');

        if (xhr.status == 200) { // verificando o status da  requisição | 200 -> está ok; Outros -> erro
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // transforma JSON em objeto Javascript
            
            // forEach para cada objeto do Array JSON usar a função adionaPacienteNaTabela()
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            // exibição dos erros
            erroAjax.classList.remove('invisivel');
        }
    });

    // para enviar a requisição é preciso chamar o método .send()
    xhr.send();
})