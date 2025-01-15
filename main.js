                            // implementando o 'active' através do JS

const navbarLinks = document.querySelectorAll('.nav-link'); //pegar todos os links da navbar
const pagatual = window.location.pathname.split('/home').pop(); // pegar o caminho atual da URL (!apenas o final da URL usando .split!)

// usei o forEach para interar os links da navbar
navbarLinks.forEach(link => { 
    // comparar o href do link com a pág atual
    if (link.getAttribute('href') === pagatual) {
        link.classList.add('active'); // add a classe 'active'
    }else {
        link.classList.remove('active'); // Garante que os outros links não tenham a classe
        
    }
});
