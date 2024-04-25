const kid = document.querySelector(".kid-layout");
fetch("../components/kid.html")
.then((res) => res.text())
.then((data) => {
kid.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));