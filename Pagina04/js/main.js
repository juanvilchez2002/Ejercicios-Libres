

//
let btn = document.querySelector("#btn")

let siderbar = document.querySelector(".sidebar");

let searchBtn = document.querySelector(".bx-search-alt")

btn.onclick = function() {
    siderbar.classList.toggle("active");
}

searchBtn.onclick = function() {
    siderbar.classList.toggle("active");
}