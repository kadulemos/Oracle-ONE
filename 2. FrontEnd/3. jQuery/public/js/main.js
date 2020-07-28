// > Divisão dos caracteres para ser utilizado na contagem
var frase = $('.frase').text(); // equivalente ao document.querySelector() | $ -> atalho do jQuery
var numPalavras = frase.split(' ').length; // split-> divide a string com o critério entre os () , em array

var tamanhoFrase = $('#tamanho-frase'); // a variável tamanhoFrase recebe como argumento a classe do <span>
tamanhoFrase.text(numPalavras); // exibe dentro da li de contador de palavras a contagem criada na var numPalavras
// expressão regular que busca qualquer espaço vazio

// > Contador de palavras e caracteres
var campo = $('.campo-digitação');
campo.on('input', function() { // input -> evento que 'escuta' cada input inserido dentro do campo
    var conteudo = campo.val(); // val -> acessa os valores do input text area | utilizado para validar um formulário

    var qtdPalavras = conteudo.split(/\S+/).length -1; // A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio
    $('#contador-palavras').text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $('#contador-caracteres').text(qtdCaracteres);
});

// > Contador de tempo
var tempoRestante = $('#tempo-digitacao').text();
campo.one('focus', function(){ // focus -> evento que detecta a entrada no campo para iniciar a digitação | one() -> igual a função on() mas só funciona uma única vez
    var cronometroID = setInterval(function() { // setInterval -> evento que chama o que for declarado, a cada tempo estabelecido
        tempoRestante--;
        $('#tempo-digitacao').text(tempoRestante); 
        if(tempoRestante < 1) {
            campo.attr('disabled',true); // atributo disable -> | attr() -> atributo, pode pegar o valor e modificar | parâmetro true para HTML
            clearInterval(cronometroID); // clearInterval -> recebe o id para informar quando deve parar de funcionar
        }
    }, 1000);
});