/*
function ação () {
    bloco
    // esse bloco só sera executado quando a ação for chamada.
}

*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtendo o elemento #area após o DOM ser completamente carregado
    var clique = window.document.getElementById('area');

    // Adicionando os ouvintes de eventos após a obtenção do elemento
    clique.addEventListener('click', clicar);
    clique.addEventListener('mouseenter', entrar);
    clique.addEventListener('mouseout', sair);

    function clicar() {
        clique.innerText = ('Clicou!!!');
        clique.style.background = 'red';
    }

    function entrar() {
        clique.innerText = ('Entrou!!!');
    }

    function sair() {
        clique.innerText = ('Saiu');
        clique.style.background = 'green';
    }
});