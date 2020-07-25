var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if(event.target.tagName == 'TD') {
        event.target.parentNode.classList.add('fadeOut');

        // setTimeout aguarda um tempo antes de remover
        setTimeout(function(){
            event.target.parentNode.remove(); // event.target é quem sofreu a ação | parent.Node -> é o pai do alvo (nesse caso é a <tr>)
        },500)
    }
});
