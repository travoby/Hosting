
//Member
export const member = document.querySelector(".member-layout");
  fetch("../layout/member.html")
  .then((res) => res.text())
  .then((data) => {
    member.innerHTML = data;

    const memberPre = document.querySelector("#memPreBtn");
    const memberNext = document.querySelector("#memNextBtn");
    const memberscrollpop = document.querySelector("#memCard")
    
    function scrollMemNext(){
        memberscrollpop.scrollBy({
            left: 250,
            behavior: "smooth",
          });
    }
    function scrollMemBack(){
        memberscrollpop.scrollBy({
            left: -250,
            behavior: "smooth",
          });
    }
    
    memberPre.addEventListener("click",scrollMemBack)
    memberNext.addEventListener("click", scrollMemNext)
   
  })
  .catch((error) => console.error("Error fetching included file:", error));