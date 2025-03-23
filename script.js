document.addEventListener('DOMContentLoaded', () => {
    const mainBubble = document.querySelector('.main-bubble');
    const background = document.querySelector('.background');
    const childBubbles = document.querySelectorAll('.child-bubble');
    const infoCards = document.querySelectorAll('.info-card');
  
    // Click main bubble: activate scene
    mainBubble.addEventListener('click', () => {
      mainBubble.classList.add('active');
      background.classList.add('on');
  
      // Delay to allow background transition
      setTimeout(() => {
        childBubbles.forEach((bubble, index) => {
          bubble.classList.add('active', 'float');
          positionBubble(bubble, index, childBubbles.length);
        });
      }, 600);
    });
  
    // Click child bubble: show related info card
    childBubbles.forEach((bubble, index) => {
      bubble.addEventListener('click', () => {
        infoCards.forEach(card => card.style.display = 'none'); // hide all
        const info = document.getElementById(`info${index + 1}`);
        if (info) info.style.display = 'block';
      });
    });
  
    // OPTIONAL: reposition bubbles on resize
    window.addEventListener('resize', () => {
      childBubbles.forEach((bubble, index) => {
        if (bubble.classList.contains('active')) {
          positionBubble(bubble, index, childBubbles.length);
        }
      });
    });
  });
  
  // Position child bubbles in a circle
  function positionBubble(bubble, index, total) {
    const angle = (index / total) * 2 * Math.PI;
    const radius = Math.min(window.innerWidth, window.innerHeight) / 3; // auto-scale radius
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
  }
  