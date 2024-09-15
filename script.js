const MesesCorretos = [
    "Janeiro", "Fevereiro", "Março", "Abril", 
    "Maio", "Junho", "Julho", "Agosto", 
    "Setembro", "Outubro", "Novembro", "Dezembro"];


document.addEventListener("DOMContentLoaded", () => {
    const meses = document.getElementById("meses");

    meses.addEventListener("click", mes_selecionado =>{
        if (event.target.tagName === "BUTTON") {
            let mes = event.target.textContent;
            OrdemUsuario.push(mes) 
            console.log(OrdemUsuario)

            if (OrdemUsuario.length === 12) {

                if (JSON.stringify(OrdemUsuario) === JSON.stringify(MesesCorretos)) {
                    alert("Parabéns! Você acertou a ordem dos meses.");
                } else {
                    alert("Ops! A ordem está errada.");
                }
                // Comparar os arrays
            }
        }
    });
});


let  OrdemUsuario = []


document.addEventListener("DOMContentLoaded", () => {
    const Reiniciar = document.getElementById("Reiniciar");

    Reiniciar.addEventListener("click", mes_selecionado =>{
        OrdemUsuario = [];  
        
    });
});

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
