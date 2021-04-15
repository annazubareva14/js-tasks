const btn = document.querySelector("#btn");

const overlay = document.querySelector("#overlay");

console.log(overlay);
console.log(btn);
btn.onclick = function() {
    overlay.style.display = "block";
}