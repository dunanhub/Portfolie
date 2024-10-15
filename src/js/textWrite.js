const text = document.querySelector(".dev");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "FrontEnd Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web - Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Photographer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);