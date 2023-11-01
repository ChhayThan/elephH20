var theme = document.getElementById("theme");

theme.onclick = function() {
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")) {
        theme.src = "images/sun.png";
    } else {
        theme.src = "images/moon.png";
    }
}