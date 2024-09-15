const  MesesCorretos = [
    "Janeiro", "Fevereiro", "Marco", "Abril", 
    "Maio", "Junho", "Julho", "Agosto", 
    "Setembro", "Outubro", "Novembro", "Dezembro"
]

let  OrdemUsuario = [];


// Ao clicar no mes errado ficar vermelho 
// randomizar os meses 


document.addEventListener('DOMContentLoaded', () => {
    const btnMostrarModos = document.getElementById('btnMostrarModos'); // Seleciona o botão para mostrar os modos
    const modosContainer = document.getElementById('modosContainer'); // Seleciona o contêiner de modos

    btnMostrarModos.addEventListener('click', () => {
        // Alterna a visibilidade do contêiner de modos
        if (modosContainer.style.display === 'none' || modosContainer.style.display === '') {
            modosContainer.style.display = 'flex'; // Mostra o contêiner de modos
        } else {
            modosContainer.style.display = 'none'; // Oculta o contêiner de modos
        }
    });
});

function irParaPagina(pagina) {
    window.location.href = pagina; // Redireciona para a página especificada
}
