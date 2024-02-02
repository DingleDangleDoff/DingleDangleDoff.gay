document.querySelectorAll('.art-image').forEach(image => {
    image.addEventListener('click', () => {
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.classList.add('fullscreen-container');

        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = image.src;
        fullscreenImage.classList.add('fullscreen-image');

        fullscreenContainer.appendChild(fullscreenImage);

        document.body.appendChild(fullscreenContainer);

        fullscreenContainer.addEventListener('click', () => {
            fullscreenContainer.remove();
        });
    });
});
