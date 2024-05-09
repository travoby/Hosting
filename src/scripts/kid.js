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





