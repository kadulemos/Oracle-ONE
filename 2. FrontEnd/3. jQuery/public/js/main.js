// > Criando variável global de inicialização do tempo
var tempoInicial = $('#tempo-digitacao').text();
var campo = $('.campo-digitacao');

// > função que inicializa todas as outras ao carregar a página
$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $('#botao-reiniciar').click(reiniciaJogo);

    atualizaPlacar();
});

function atualizaTamanhoFrase() {
    // > Divisão dos caracteres para ser utilizado na contagem
    var frase = $('.frase').text(); // equivalente ao document.querySelector() | $ -> atalho do jQuery
    var numPalavras = frase.split(' ').length; // split-> divide a string com o critério entre os () , em array

    var tamanhoFrase = $('#tamanho-frase'); // a variável tamanhoFrase recebe como argumento a classe do <span>
    tamanhoFrase.text(numPalavras); // exibe dentro da li de contador de palavras a contagem criada na var numPalavras
}

function inicializaContadores() {
// > Contador de palavras e caracteres
    campo.on('input', function() { // input -> evento que 'escuta' cada input inserido dentro do campo
        var conteudo = campo.val(); // val -> acessa os valores do input text area | utilizado para validar um formulário

        var qtdPalavras = conteudo.split(/\S+/).length -1; // A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio
        $('#contador-palavras').text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $('#contador-caracteres').text(qtdCaracteres);
    });
}

function inicializaMarcadores() {
    campo.on('input', function() {
        var frase = $('.frase').text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length); // sustr() -> pega pedaço do conteúdo

        if(digitado == comparavel) {
            campo.addClass('borda-verde');
            campo.removeClass('borda-vermelha');
        } else {
            campo.addClass('borda-vermelha');
            campo.removeClass('borda-verde');
        }
    });
}

function inicializaCronometro() {
    // > Contador de tempo
    campo.one('focus', function() { // focus -> evento que detecta a entrada no campo para iniciar a digitação | one() -> igual a função on() mas só funciona uma única vez
        var tempoRestante = $('#tempo-digitacao').text();
        var cronometroID = setInterval(function() { // setInterval -> evento que chama o que for declarado, a cada tempo estabelecido
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante); 
            if(tempoRestante < 1) {
                clearInterval(cronometroID); // clearInterval -> recebe o id para informar quando deve parar de funcionar
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr('disabled',true); // atributo disable -> | attr() -> atributo, pode pegar o valor e modificar | parâmetro true para HTML
    campo.toggleClass('campo-desativado');
    inserePlacar();
}

function reiniciaJogo() {
    campo.attr('disabled', false);
    campo.val('');
    // função do jQuery '$(document).ready(function())' -> chama todas as funções quando é inicializada a página | atalho -> $()
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial);

    inicializaCronometro();

    campo.toggleClass('campo-desativado'); // habilita / desabilita
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');
}

function atualizaTamanhoInicial(tempo) {
    tempoInicial = tempo;
    $('#tempo-digitacao').text(tempo);
}

// use href="#top" or href="#" to link to the top of the current page