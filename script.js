const menu = document.getElementById('menu_bar');
const toggleButton = document.getElementById('menu_toggle');
const closeButton = document.getElementById('close_menu');

toggleButton.addEventListener("click", () => {
    menu.classList.add("active");
});

closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
});


// const menu = document.getElementById("menu_bar");
// const toggleButton = document.getElementById("menu_toggle");
// const closeButton = document.getElementById("close_menu");

// // Menu ko show karne ke liye
// toggleButton.addEventListener("click", () => {
//     menu.classList.add("active");
// });

// // Menu ko hide karne ke liye
// closeButton.addEventListener("click", () => {
//     menu.classList.remove("active");
// });
