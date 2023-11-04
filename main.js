var theme = document.getElementById("theme");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

theme.onclick = function() {
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")) {
        theme.src = "images/sun.png";
    } else {
        theme.src = "images/moon.png";
    }
}