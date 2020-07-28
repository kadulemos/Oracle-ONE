var frase = $('.frase').text(); // equivalente ao document.querySelector() | $ -> atalho do jQuery
var numPalavras = frase.split(' ').length; // split-> divide a string com o critério entre os () , em array

var tamanhoFrase = $('#tamanho-frase'); // a variável tamanhoFrase recebe como argumento a classe do <span>
tamanhoFrase.text(numPalavras); // exibe dentro da li de contador de palavras a contagem criada na var numPalavras
// expressão regular que busca qualquer espaço vazio

var campo = $('.campo-digitação');
campo.on('input', function() { // input -> evento que 'escuta' cada input inserido dentro do campo
    var conteudo = campo.val(); // val -> acessa os valores do input text area | utilizado para validar um formulário

    var qtdPalavras = conteudo.split(/\S+/).length -1; // A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio
    $('#contador-palavras').text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $('#contador-caracteres').text(qtdCaracteres);
});