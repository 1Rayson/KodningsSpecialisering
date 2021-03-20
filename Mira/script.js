function myFunction() {
    let menu = document.getElementById ("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    menu.addEventListener('click', () => {
        menu.classList.add('menu');
    })
}
