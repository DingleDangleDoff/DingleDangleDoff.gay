const numStars = 250; 
const starsContainer = document.getElementById('stars-container');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${getRandomValue(0, 100)}vh`;
    star.style.left = `${getRandomValue(0, 100)}vw`;
    star.style.opacity = getRandomValue(0.2, 0.7);
    star.style.animationDelay = `${getRandomValue(0, 5)}s`;

    starsContainer.appendChild(star);
}

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}