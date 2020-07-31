$('#botão-frase').click(fraseAleatoria);

function fraseAleatoria() {
    $('#spinner').toggle(); // novo, mostrando o spinner

    $.get('http://localhost:3000/frases', trocaFraseAleatoria)
    .fail(function(){
        $('#erro').toggle(); // ao falhar mostra a mensagem de erro
        setTimeout(function(){
            $('#erro').toggle();
        }1500);
    });
    .always(function(){ // novo, escondendo o spinner
        $('#spinner').toggle();
    })
}

function trocaFraseAleatoria(data) {
    var frase = $('.frase');
    var numeroAleatorio = Math.random() * data.length;

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio]);
}