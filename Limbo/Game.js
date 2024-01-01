document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('limboGameContainer');
    const numRows = 2;
    const numColumns = 4;

    const positions = [];
    const transitionDuration = 300;
    const fadeInDelay = 100;
    const orbitDuration = 500;
    const music = document.getElementById('music');
    let isCorrectKeyHighlighted = false;
    let orbitCreated = false;
    let isGameEnded = false;
    let isOrbitDone = false; // Added a flag to track if the orbit is done

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            positions.push({ row, col });
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function moveAllImagesRandom() {
        shuffle(positions);

        const images = document.querySelectorAll('#limboGameContainer img');
        images.forEach((img, index) => {
            const newPosition = positions[index];
            const { row, col } = newPosition;

            img.style.transition = `transform ${transitionDuration}ms ease-in-out`;
            img.style.transform = `translate(${(col - 1.5) * 20}vw, ${(row - 0.5) * 20}vh)`;
        });

        if (isCorrectKeyHighlighted) {
            const correctKey = container.lastElementChild.lastElementChild;
            correctKey.classList.remove('highlighted');
            isCorrectKeyHighlighted = false;
        }
    }

    function fadeInImages() {
        const images = document.querySelectorAll('#limboGameContainer img');
        images.forEach((img, index) => {
            img.style.transition = `opacity ${transitionDuration}ms ease-in-out`;
            img.style.opacity = 0;

            setTimeout(() => {
                img.style.opacity = 1;
            }, fadeInDelay * index);
        });
    }

    function createEllipticalOrbit() {
        const images = document.querySelectorAll('#limboGameContainer img');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const imageWidth = images[0].width;
        const imageHeight = images[0].height;
        const radiusX = containerWidth / 2 - imageWidth / 2;
        const radiusY = containerHeight / 4;

        const numImages = images.length;
        const angleIncrement = (2 * Math.PI) / numImages;

        const currentPositions = getCurrentPositions();

        images.forEach((img, index) => {
            const { row, col } = currentPositions[index];

            const position = row * numColumns + col + 1;

            let newPosition;
            switch (position) {
                case 1:
                    newPosition = 4;
                    break;
                case 2:
                    newPosition = 3;
                    break;
                case 3:
                    newPosition = 2;
                    break;
                case 4:
                    newPosition = 1;
                    break;
                default:
                    newPosition = position;
            }

            const angle = -angleIncrement * (newPosition - 1);

            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);

            img.style.transition = `transform ${orbitDuration}ms linear`;
            img.style.transform = `translate(${x}px, ${y}px)`;
        });

        orbitCreated = true;
        container.addEventListener('click', clickHandler);
    }

    function getCurrentPositions() {
        const positions = [];
        const images = document.querySelectorAll('#limboGameContainer img');

        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const col = Math.floor((rect.left + rect.right) / 2 / container.offsetWidth * numColumns);
            const row = Math.floor((rect.top + rect.bottom) / 2 / container.offsetHeight * numRows);
            positions.push({ row, col });
        });

        return positions;
    }

    function hueImage(element, targetHue, duration, delay) {
        const initialHue = parseInt(element.style.filter.replace("hue-rotate(", "").replace("deg)", "")) || 0;
        const increment = (targetHue - initialHue) / (duration / 16);
        let currentHue = initialHue;

        function updateHue() {
            currentHue += increment;
            element.style.filter = `hue-rotate(${currentHue}deg)`;

            if ((increment > 0 && currentHue < targetHue) || (increment < 0 && currentHue > targetHue)) {
                requestAnimationFrame(updateHue);
            } else if (targetHue === 0) {
                setTimeout(() => element.style.filter = "", delay);
            }
        }

        updateHue();
    }

    function handleWin() {
        if (isOrbitDone && !isGameEnded) {
            window.location.href = 'https://dingledangledoff.gay/';
            isGameEnded = true;
        }
    }

    function handleLoss() {
        window.location.href = 'https://dingledangledoff.gay/Ott/';
    }

    const events = [
        { timing: 0, action: fadeInImages },
        { timing: 1788, action: () => hueImage(container.lastElementChild.lastElementChild, 100, 500, 0) },
        { timing: 2988, action: () => hueImage(container.lastElementChild.lastElementChild, 0, 500, 0) },
        { timing: 4188, action: () => moveAllImagesRandom() },
        { timing: 4488, action: () => moveAllImagesRandom() },
        { timing: 4788, action: () => moveAllImagesRandom() },
        { timing: 5088, action: () => moveAllImagesRandom() },
        { timing: 5388, action: () => moveAllImagesRandom() },
        { timing: 5688, action: () => moveAllImagesRandom() },
        { timing: 5988, action: () => moveAllImagesRandom() },
        { timing: 6288, action: () => moveAllImagesRandom() },
        { timing: 6588, action: () => moveAllImagesRandom() },
        { timing: 6888, action: () => moveAllImagesRandom() },
        { timing: 7188, action: () => moveAllImagesRandom() },
        { timing: 7488, action: () => moveAllImagesRandom() },
        { timing: 7788, action: () => moveAllImagesRandom() },
        { timing: 8088, action: () => moveAllImagesRandom() },
        { timing: 8388, action: () => moveAllImagesRandom() },
        { timing: 8688, action: () => moveAllImagesRandom() },
        { timing: 8988, action: () => moveAllImagesRandom() },
        { timing: 9288, action: () => moveAllImagesRandom() },
        { timing: 9588, action: () => moveAllImagesRandom() },
        { timing: 9888, action: () => moveAllImagesRandom() },
        { timing: 10188, action: () => moveAllImagesRandom() },
        { timing: 10488, action: () => moveAllImagesRandom() },
        { timing: 10788, action: () => moveAllImagesRandom() },
        { timing: 11088, action: () => moveAllImagesRandom() },
        { timing: 11388, action: () => moveAllImagesRandom() },
        { timing: 11688, action: () => moveAllImagesRandom() },
        { timing: 11988, action: () => moveAllImagesRandom() },
        { timing: 12288, action: () => moveAllImagesRandom() },
        { timing: 12588, action: () => moveAllImagesRandom() },
        { timing: 12888, action: () => moveAllImagesRandom() },
        { timing: 13188, action: () => moveAllImagesRandom() },
        { timing: 13488, action: () => moveAllImagesRandom() },
        { timing: 13788, action: () => { createEllipticalOrbit(); isOrbitDone = true; } }
    ];

    let startTime;

    function handleTimings() {
        const currentTime = Date.now() - startTime;

        for (const event of events) {
            if (currentTime >= event.timing && !event.triggered) {
                event.action();
                event.triggered = true;

                if (event.timing === 0) {
                    music.play();

                    if (!orbitCreated) {
                        container.removeEventListener('click', clickHandler);
                    }
                }
            }
        }

        requestAnimationFrame(handleTimings);
    }

    function clickHandler(event) {
        if (!isGameEnded) {
            const clickedElement = event.target;
            const images = document.querySelectorAll('#limboGameContainer img');
            const lastImage = images[images.length - 1];
    
            if (isOrbitDone && clickedElement.tagName === 'IMG') {
                if (clickedElement === lastImage) {
                    handleWin();
                } else {
                    handleLoss();
                }
            }
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) { // Space
            startTime = Date.now();
            events.forEach(event => event.triggered = false);
            handleTimings();
        }
    });

    for (let row = 0; row < numRows; row++) {
        const flexContainer = document.createElement('div');
        flexContainer.style.display = 'flex';
        flexContainer.style.alignItems = 'center';
        flexContainer.style.justifyContent = 'center';

        for (let col = 0; col < numColumns; col++) {
            const img = document.createElement('img');
            img.src = 'Limbo/Key.png';
            img.alt = 'Key';

            img.style.width = '20vw';
            img.style.height = 'auto';
            img.style.position = 'absolute';
            img.style.transition = `transform ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`;

            img.style.transform = `translate(${(col - 1.5) * 20}vw, ${(row - 0.5) * 20}vh)`;
            img.style.opacity = 0;

            if (row === numRows - 1 && col === numColumns - 1) {
                img.addEventListener('click', handleWin);
            }

            flexContainer.appendChild(img);
        }

        container.appendChild(flexContainer);
    }
});