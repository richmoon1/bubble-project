document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.querySelector('.bubble');
    const background = document.querySelector('.background');
    
    bubble.addEventListener('click', () => {
        bubble.classList.toggle('active');
        background.classList.toggle('on');
    });
});
