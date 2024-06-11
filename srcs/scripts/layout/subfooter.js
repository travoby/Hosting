 const subfooter = document.querySelector(".subfooter-layout");
fetch("../layout/subfooter.html")
.then((res) => res.text())
.then((data) => {
  subfooter.innerHTML = data;

})
.catch((error) => console.error("Error fetching included file:", error));