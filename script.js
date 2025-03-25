const bubble = document.getElementById('main-bubble');
const background = document.getElementById('bg');
const scene = document.getElementById('scene-img');
const childBubbles = document.querySelectorAll('.child-bubble');

let active = false;

bubble.addEventListener('mouseenter', () => {
  bubble.src = 'images/Backgroundon.png';
});
bubble.addEventListener('mouseleave', () => {
  bubble.src = 'images/Backgroundoff.png';
});
bubble.addEventListener('click', () => {
  active = !active;

  // Switch main bubble image
  bubble.src = active
    ? 'images/Backgroundon.png'
    : 'images/Backgroundoff.png';

  // Switch scene background
  scene.src = active
    ? 'images/backiion.jpg'
    : 'images/backiioff.jpg';

  bubble.classList.toggle('active');
  background.classList.toggle('on');
  childBubbles.forEach((b, i) => {
    if (active) {
      positionBubble(b, i, childBubbles.length);
      b.classList.add('active');
      b.style.animation = `pop 0.5s ease-out ${i * 0.1}s forwards, float 6s ease-in-out infinite`;
    } else {
      b.classList.remove('active');
      centerBubble(b);
      b.style.animation = 'none';
    }
  });
});

childBubbles.forEach((bubble) => {
  bubble.addEventListener('mouseenter', () => {
    bubble.src = 'images/childon.png';
  });
  bubble.addEventListener('mouseleave', () => {
    bubble.src = 'images/childoff.png';
  });

  centerBubble(bubble); // start at center
});

function centerBubble(bubble) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  bubble.style.left = `${centerX}px`;
  bubble.style.top = `${centerY}px`;
  bubble.style.transform = 'translate(-50%, -50%) scale(0.3)';
}

function positionBubble(bubble, index, total) {
  const angle = (index / total) * 2 * Math.PI;
  const radius = Math.min(window.innerWidth, window.innerHeight) / 3.2;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;
  // transform is handled by animation
}

window.addEventListener('resize', () => {
  if (active) {
    childBubbles.forEach((b, i) => {
      positionBubble(b, i, childBubbles.length);
    });
  } else {
    childBubbles.forEach(centerBubble);
  }
});


// ✨ Bubble info card logic
const infoCard = document.getElementById('info-card');

// Show the info card
childBubbles[0].addEventListener('click', () => {
  if (!active) return;
  infoCard.classList.remove('hidden');
  requestAnimationFrame(() => {
    infoCard.classList.add('visible');
  });
});

// Hide the card
function hideCard() {
  infoCard.classList.remove('visible');
  setTimeout(() => {
    infoCard.classList.add('hidden');
  }, 300);
}
