document.addEventListener('DOMContentLoaded', function() {
    var referenceSection = document.querySelector('.reference');

    referenceSection.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList.contains('info')) {
            var tooltipContentId = target.dataset.tooltipId;
            var tooltipContent = document.getElementById(tooltipContentId);
            toggleTooltip(tooltipContent);
        }
    });

    document.body.addEventListener('click', function(event) {
        var target = event.target;
        var tooltips = document.querySelectorAll('.tooltip');
        if (!target.classList.contains('info')) {
            tooltips.forEach(function(tooltip) {
                tooltip.style.display = 'none';
            });
        }
    });

    function toggleTooltip(tooltipContent) {
        if (tooltipContent.style.display === 'none' || tooltipContent.style.display === '') {
            tooltipContent.style.display = 'block';
        } else {
            tooltipContent.style.display = 'none';
        }
    }
});