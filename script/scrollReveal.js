window.sr = ScrollReveal({ reset: true })

// sr.reveal('.project', {delay: 200, duration: 1000 })

setTimeout(() => {
    ScrollReveal().reveal('.sr_1', {
        origin: 'right',    // Define a origem da animação como a esquerda
        distance: '100px',  // Define a distância do deslocamento
        duration: 1000,    // Define a duração da animação em milissegundos
        delay: 50,        // Define o atraso antes da animação começar
    });

    ScrollReveal().reveal('.sr_2', {
        origin: 'left',    // Define a origem da animação como a esquerda
        distance: '100px',  // Define a distância do deslocamento
        duration: 1000,    // Define a duração da animação em milissegundos
        delay: 50,        // Define o atraso antes da animação começar
    });
}, 4500);

