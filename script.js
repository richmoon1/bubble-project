const bubble = document.querySelector('.bubble');
const container = document.querySelector('.container');

bubble.addEventListener('click', () => {
    container.classList.toggle('active');
});
