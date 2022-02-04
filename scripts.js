const app = {};

app.init = () => {
    app.menuListener();
}

app.menuListener = () => {
    const menu = document.querySelector(".hamburger")
    menu.addEventListener("click", () => {
        console.log("click clack")
    })
}