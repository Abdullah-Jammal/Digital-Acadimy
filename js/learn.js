//Get Color
let randomDiv = document.querySelector(".random-color");
let hexHolder = document.querySelector(".holder-color")
function changeColor() {
    var symbol,color;
    symbol = "0123456789ABCDEF"
    color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbol[Math.floor(Math.random() * symbol.length)]
    }
    randomDiv.style.background = color;
    hexHolder.innerHTML = color;
}
//Scroll Up
let scrollUp = document.querySelector(".scroll-up");

window.onscroll = function() {
    if(scrollY >= 2000) {
        scrollUp.classList.add("show");
    } else {
        scrollUp.classList.remove("show");
    }
}

scrollUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
}