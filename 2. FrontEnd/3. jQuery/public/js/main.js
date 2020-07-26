var frase = $('.frase').text(); // equivalente ao document.querySelector() | $ -> atalho do jQuery
var numPalavras = frase.split(' ').length; // split-> divide a string com o critério entre os () , em array

var tamanhoFrase = $('#tamanho-frase'); // a variável tamanhoFrase recebe como argumento a classe do <span>
tamanhoFrase.text(numPalavras); // exibe dentro da li de contador de palavras a contagem criada na var numPalavras