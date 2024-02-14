let btn = document.querySelectorAll(".button");
let popup = document.getElementById("popup");

for(let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", () => {
        popup.classList.toggle("popup__hidden");
    })
}


