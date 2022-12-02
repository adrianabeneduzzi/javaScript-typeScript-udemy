//IIFE

function meuEscopo () {
    const form = document.querySelector('.form');

    
    /* Exemplo 1
    form.onsubmit = function (evento) {
        evento.preventDefault();
        console.log('Foi enviado');
    };*/

     /* Com contador
    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Form nao foi enviado ${contador}`);
        contador++;
    }
    */   
   
    function recebeEventoForm (evento) {
        const nome = form.querySelector('.nome');
        const nome = form.querySelector('.sobrenome');
        const nome = form.querySelector('.peso');
        const nome = form.querySelector('.altura');
       

    }

   

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();