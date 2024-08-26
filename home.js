//Nose Squeak
document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('Image');
    const audioElement = document.getElementById('Audio');

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

//Quantum Moon
function moonPlacement() {
    const moonDiv = document.querySelector('.moon');
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    const moonWidth = moonDiv.clientWidth;
    const moonHeight = moonDiv.clientHeight;

    const randomX = Math.random() * (bodyWidth - moonWidth);
    const randomY = Math.random() * (bodyHeight - moonHeight);

    moonDiv.style.left = `${randomX}px`;
    moonDiv.style.top = `${randomY}px`;
}

function volumeDistance(audio, moonDiv) {
    const moonRect = moonDiv.getBoundingClientRect();
    const moonX = moonRect.left + moonRect.width / 2;
    const moonY = moonRect.top + moonRect.height / 2;

    const maxVolumeDistance = 300;

    document.addEventListener('mousemove', (event) => {
        const cursorX = event.clientX;
        const cursorY = event.clientY;

        const distance = Math.sqrt(Math.pow(cursorX - moonX, 2) + Math.pow(cursorY - moonY, 2));

        const volume = 1 - Math.min(distance / maxVolumeDistance, 1);
        audio.volume = Math.min(Math.max(volume, 0), 1);
    });
}

function initializeMoon() {
    const moonDiv = document.querySelector('.moon');
    const audio = document.getElementById('Loop');
    const showMoon = Math.random() < 1 / 6;

    if (showMoon) {
        moonDiv.style.display = 'block';
        moonPlacement();
        audio.loop = true;
        audio.volume = 0;
        audio.play();
        volumeDistance(audio, moonDiv);
    } else {
        moonDiv.style.display = 'none';
        audio.pause();
        audio.currentTime = 0;
    }
}

function handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
        initializeMoon();
    } else {
        const moonDiv = document.querySelector('.moon');
        const audio = document.getElementById('Loop');
        moonDiv.style.display = 'none';
        audio.pause();
        audio.currentTime = 0;
    }
}

window.onload = function() {
    initializeMoon();
    document.addEventListener('visibilitychange', handleVisibilityChange);
};