const floatingHearts = document.getElementById('floatingHearts');
const touchParticles = document.getElementById('touchParticles');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

function createFloatingHeart() {
  const heart = document.createElement('span');
  const heartSymbols = ['💖', '💗', '💞', '💘', '💝', '💓'];
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 1.5 + 1.1}rem`;
  heart.style.animationDuration = `${Math.random() * 7 + 5}s`;
  heart.style.animationDelay = `${Math.random() * 1.8}s`;
  floatingHearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

function createTouchBurst(x, y) {
  const burst = document.createElement('span');
  const symbols = ['💖', '✨', '🎉', '🌸', '💫', '🎈'];
  burst.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  burst.style.fontSize = `${Math.random() * 1.4 + 1.1}rem`;
  touchParticles.appendChild(burst);

  setTimeout(() => {
    burst.remove();
  }, 1000);
}

function makeHearts() {
  for (let i = 0; i < 20; i += 1) {
    createFloatingHeart();
  }
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = '🔇 Music Off';
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🔊 Music On';
  }
}

document.addEventListener('pointerdown', (event) => {
  createTouchBurst(event.clientX, event.clientY);
});

document.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  if (touch) {
    createTouchBurst(touch.clientX, touch.clientY);
  }
}, { passive: true });

musicToggle.addEventListener('click', toggleMusic);

setInterval(createFloatingHeart, 700);
makeHearts();

bgMusic.volume = 0.45;

bgMusic.addEventListener('play', () => {
  musicToggle.textContent = '🔇 Music Off';
});

bgMusic.addEventListener('pause', () => {
  musicToggle.textContent = '🔊 Music On';
});

window.addEventListener('load', () => {
  bgMusic.play().catch(() => {
    musicToggle.textContent = '🔊 Music On';
  });
});
