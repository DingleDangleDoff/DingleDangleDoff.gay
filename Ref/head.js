document.getElementById("Switch").addEventListener("change", function() {
    let img = document.getElementById("Head Shape 2");

    if (this.checked) {
        img.src = "/Ref/images/Head Shape 2.5.png";
    } else {
        img.src = "/Ref/images/Head Shape 2.png";
    }
});
