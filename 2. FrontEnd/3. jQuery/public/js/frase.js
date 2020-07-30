$('#botão-frase').click(fraseAleatoria);

function fraseAleatoria() {
    $.get('http://localhost:3000/frases');
}

function trocaFraseAleatoria(data) {
    var frase = $('.frase');
    var numeroAleatorio = Math.random() * data.length;

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio]);
}