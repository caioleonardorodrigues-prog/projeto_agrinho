// =======================
// Formulário de Contato
// =======================
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem){
        formMessage.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        formMessage.style.color = 'green';
        form.reset();
    } else {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.style.color = 'red';
    }
});

// =======================
// Slider de Imagens
// =======================
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para mostrar slide
function showSlide(index) {
    if(index < 0) {
        currentIndex = slides.length - 1;
    } else if(index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botões do slider
prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

// Troca automática de slides a cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
