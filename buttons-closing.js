const preloader = document.querySelector(".preloader")
const popUpClose = document.querySelector("#fontawesome-icons-pop-up")
const popUpCloseDone = document.querySelector(".fontawesome-icons-pop-up-done")
const popUp = document.querySelector(".pop-up-wrap")
const popUpDone = document.querySelector(".pop-up-wrap-done")
const toggleMenu = document.querySelector("#fontawesome-icons")
const mobileNav = document.querySelector(".mobile-nav")
const rot = document.querySelector(".rot")
const lis = document.querySelectorAll(".lis")

window.onload = function(){
    preloader.style.display = "none";
}

popUpClose.addEventListener('click', function(){
    popUp.classList.add('pop-up-wrap-gone');
})

popUpCloseDone.addEventListener('click', function(){
    popUpDone.classList.add('pop-up-wrap-done-gone');
    location.replace('pizza-maker.html')
})

toggleMenu.addEventListener('click', function(){
    mobileNav.classList.toggle('mobile-nav-close');
    rot.classList.toggle('rotate');
})

lis.forEach(function (li) {
    li.addEventListener('click', function() {
        mobileNav.classList.toggle('mobile-nav-close');
        rot.classList.toggle('rotate');
    });
});


hr = document.querySelector("#fixed-div");

var myScrollFunc = function () {
    var y = window.scrollY;

    if(window.screen.width <= 600) {
        if (y >= 200) {
            hr.className = "fixed-div-show"
        } else {
            hr.className = "fixed-div"
        }
    }
};

window.addEventListener("scroll", myScrollFunc);