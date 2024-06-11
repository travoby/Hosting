const free = document.querySelector(".free-layout");
fetch("../layout/free.html")
.then((res) => res.text())
.then((data) => {
  free.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));