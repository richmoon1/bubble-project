// ✅ script.js with image-based responsive child bubbles

const bubble = document.getElementById('main-bubble');
const background = document.getElementById('bg');
const childBubbles = document.querySelectorAll('.child-bubble');

let active = false;

bubble.addEventListener('click', () => {
  active = !active;

  // Switch main crystal ball image
  bubble.src = active
    ? 'images/Backgroundon.png'
    : 'images/Backgroundoff.png';

  bubble.classList.toggle('active');
  background.classList.toggle('on');

  // Show/hide and reposition child bubbles
  childBubbles.forEach((b, i) => {
    b.classList.toggle('active');
    if (active) positionBubble(b, i, childBubbles.length);
  });
});

childBubbles.forEach((bubble) => {
  bubble.addEventListener('mouseenter', () => {
    bubble.src = 'images/childon.png';
  });
  bubble.addEventListener('mouseleave', () => {
    bubble.src = 'images/childoff.png';
  });
});

function positionBubble(bubble, index, total) {
  const angle = (index / total) * 2 * Math.PI;
  const radius = Math.min(window.innerWidth, window.innerHeight) / 3.2;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  const size = bubble.offsetWidth / 2;
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;
  bubble.style.transform = 'translate(-50%, -50%) scale(1)';
  
}

window.addEventListener('resize', () => {
  if (active) {
    childBubbles.forEach((b, i) => {
      positionBubble(b, i, childBubbles.length);
    });
  }
});
