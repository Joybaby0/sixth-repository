let sideBar = document.querySelector(".sidebar")
let cancleBtn = document.querySelector(".cancle-btn")
let toggleBtn = document.querySelector(".toggle-btn")

toggleBtn.addEventListener("click", function(){
    sideBar.classList.toggle("showbar")
})

cancleBtn.addEventListener("click", function(){
    sideBar.classList.remove("showbar")
})
