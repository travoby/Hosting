const navbar = document.querySelector(".navbar-layout");
fetch("../../components/layout/navbar.html")
.then((res) => res.text())
.then((data) => {
  
  navbar.innerHTML = data;
  const newBtn = document.getElementById("new-btn")
console.log(newBtn)
const listContainerNew =document.getElementById("list-container-new")
function showContainer(){
  listContainerNew.classList.remove("top-[-100%]")
  listContainerNew.classList.add("top-[11%]")
}
function hideContainer(){
  listContainerNew.classList.add("top-[-100%]")
  listContainerNew.classList.remove("top-[11%]")
}
newBtn.addEventListener('mouseenter',showContainer)
listContainerNew.addEventListener('mouseleave',hideContainer)
})

.catch((error) => console.error("Error fetching included file:", error));

