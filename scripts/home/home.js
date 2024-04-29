// main section


const section1 = document.querySelector(".section-1-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-1.html")
.then((res) => res.text())
.then((data) => {
  section1.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const section2 = document.querySelector(".section-2-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-2.html")
.then((res) => res.text())
.then((data) => {
  section2.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const section3 = document.querySelector(".section-3-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-3.html")
.then((res) => res.text())
.then((data) => {
  section3.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
const section4 = document.querySelector(".section-4-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-4.html")
.then((res) => res.text())
.then((data) => {
  section4.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const section5 = document.querySelector(".section-5-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-5.html")
.then((res) => res.text())
.then((data) => {
  section5.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const footer = document.querySelector(".footer-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/footer.html")
.then((res) => res.text())
.then((data) => {
  footer.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

