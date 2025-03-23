const menu = document.getElementById('menu_bar');
const toggleButton = document.getElementById('menu_toggle');
const closeButton = document.getElementById('close_menu');

// menu ko show krne ke liyea
toggleButton.addEventListener("click", () => {
    menu.classList.add("active");
});

// menu ko remove krne ke liyea
closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
});



