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

document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('Image');
    const audioElement = document.getElementById('Audio');

    // Define the center point and radius in terms of the image's original size
    const originalImageWidth = imageElement.naturalWidth;
    const originalImageHeight = imageElement.naturalHeight;

    const originalCenterX = 771;
    const originalCenterY = 360;
    const radius = 23;

    imageElement.addEventListener('click', (event) => {
        const clickedX = event.offsetX;
        const clickedY = event.offsetY;

        const scaleFactorX = imageElement.width / originalImageWidth;
        const scaleFactorY = imageElement.height / originalImageHeight;

        const originalClickedX = clickedX / scaleFactorX;
        const originalClickedY = clickedY / scaleFactorY;

        const distance = Math.sqrt(
            Math.pow(originalClickedX - originalCenterX, 2) + Math.pow(originalClickedY - originalCenterY, 2)
        );

        if (distance <= radius) {
            audioElement.play();
        }
    });
});

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.style.opacity = 0;
        setTimeout(() => {
            menu.classList.remove('open');
        }, 250);
    } else {
        menu.classList.add('open');
        setTimeout(() => {
            menu.style.opacity = 1;
        }, 10);
    }
});