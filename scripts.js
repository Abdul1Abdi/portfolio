const app = {};

app.init = () => {
    app.menuListener();
    app.scrollToAbout();
}

app.menuListener = () => {
    const menu = document.querySelector(".hamburger")
    const navUL = document.querySelector("#navUL")
    menu.addEventListener("click", () => {
        if (navUL.classList.contains("show")){
            navUL.classList.remove("show");
        }
        else {
            navUL.classList.add("show");
        }   
        
    })
}

app.scrollToAbout = () => {
    const button = document.querySelector("#scrollToAbout");
    const about = document.querySelector("#about");
    button.addEventListener("click", () => {
        about.scrollIntoView({ behavior: "smooth", block: "start"});
    })
}

app.init();