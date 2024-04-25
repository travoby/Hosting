const subnav = document.querySelector(".subnav-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/subnav.html")
.then((res) => res.text())
.then((data) => {
  subnav.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const shopnow = document.querySelector(".shopnow-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/shopnow-section.html")
.then((res) => res.text())
.then((data) => {
  shopnow.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const shop = document.querySelector(".shop-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/shop-essentials.html")
.then((res) => res.text())
.then((data) => {
  shop.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const popular = document.querySelector(".popular-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/popular-section.html")
.then((res) => res.text())
.then((data) => {
  popular.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const men = document.querySelector(".men-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/men-section.html")
.then((res) => res.text())
.then((data) => {
  men.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const member = document.querySelector(".member-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-5.html")
.then((res) => res.text())
.then((data) => {
  member.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const marathon = document.querySelector(".marathon-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/marathon-section.html")
.then((res) => res.text())
.then((data) => {
  marathon.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const classic = document.querySelector(".classic-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/home/section-4.html")
.then((res) => res.text())
.then((data) => {
  classic.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const brooks = document.querySelector(".brooks-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/brooks-section.html")
.then((res) => res.text())
.then((data) => {
  brooks.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const footermen = document.querySelector(".footer-men-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/men/footer-men.html")
.then((res) => res.text())
.then((data) => {
  footermen.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));