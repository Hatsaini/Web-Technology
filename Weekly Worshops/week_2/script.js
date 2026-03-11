document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("swapButton").addEventListener("click", function () {
    var image = document.getElementById("swap");
    image.src = image.src.includes("images/download.jpeg") ? "images/image2.jpg" : "images/download.jpeg";
});
