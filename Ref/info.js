window.onload = function() {
    var image = document.getElementById('ref');
    var imageWidth = image.naturalWidth;
    var imageHeight = image.naturalHeight;
    var xCoordinate = imageWidth * 0.89;
    var yCoordinate = imageHeight * 0.91;
    var questionMark = document.querySelector('.question-mark');
    questionMark.style.left = xCoordinate + 'px';
    questionMark.style.top = yCoordinate + 'px';
};
