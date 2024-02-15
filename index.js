let btn = document.querySelectorAll(".button");
let popup = document.getElementById("popup");

// Apllying event listner to the buttons responsible for popup to pop-out or hide.

for(let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", () => {
        popup.classList.toggle("popup__hidden");
    })
}


