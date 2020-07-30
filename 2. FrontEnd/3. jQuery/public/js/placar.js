function inserePlacar() {
    var placar = $('.placar').find('tbody');
    var usuario = 'Kadu';
    var numPalavras = $('#contador-palavras').text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').click(removeLinha);

    corpoTabela.append(linha);

    $('.placar').slideDown(500);
    scroolPlacar();
}

function novaLinha(usuario, palavras) {
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(numPalavras);
    var colunaRemover = $('<td>');

    var link = $('<a>').addClass('botao-remover').attr('href', '#');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icone);

    colunaRemover.append(link);

    // Os dois <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);
    setTimeout(function () {
        linha.remove();
    }, 1000);
}

function mostraPlacar() {
    $('placar').stop().slideToglle(660);
}

function scroolPlacar() {
    var posicaoPlacar = $('.placar').offset().top;

    $('body').animate( {
        scrollTop: posicaoPlacar + 'px'
    }, 1000);
}