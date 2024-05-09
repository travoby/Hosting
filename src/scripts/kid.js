// Section Popular in kids
const kidPopPre = document.querySelector("#kidPopPre");
const kidPopNext = document.querySelector("#kidPopNext");
const scrollKidPop = document.querySelector("#kidPopCard")

function scrollKidPopNext(){
    scrollKidPop.scrollBy({
        left: 300,
        behavior: "smooth",
      });
}
function scrollKidPopBack(){
    scrollKidPop.scrollBy({
        left: -300,
        behavior: "smooth",
      });
}

kidPopPre.addEventListener("click",scrollKidPopBack)
kidPopNext.addEventListener("click", scrollKidPopNext)



// Section Classic in Kid Slider
const classicKidPre = document.querySelector("#classicKidPre");
const classicKidNext = document.querySelector("#classicKidNext");
const scrollKid = document.querySelector("#KidCard")

function scrollKidNext(){
    scrollKid.scrollBy({
        left: 300,
        behavior: "smooth",
      });
}
function scrollKidBack(){
    scrollKid.scrollBy({
        left: -300,
        behavior: "smooth",
      });
}

classicKidPre.addEventListener("click",scrollKidBack)
classicKidNext.addEventListener("click", scrollKidNext)





