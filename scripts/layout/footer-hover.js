const footerhover = document.querySelector(".footer-hover-layout");
fetch("../../components/layout/footer-hover.html")
.then((res) => res.text())
.then((data) => {
  footerhover.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));