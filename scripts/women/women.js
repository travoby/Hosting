const subnav = document.querySelector(".subnav-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/subnav.html")
.then((res) => res.text())
.then((data) => {
  subnav.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

;

const shop = document.querySelector(".shop-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/shop.html")
.then((res) => res.text())
.then((data) => {
  shop.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const popular = document.querySelector(".popular-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/popular.html")
.then((res) => res.text())
.then((data) => {
  popular.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const hero = document.querySelector(".hero-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/hero.html")
.then((res) => res.text())
.then((data) => {
  hero.innerHTML = data;
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


const trend = document.querySelector(".trend-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/trend.html")
.then((res) => res.text())
.then((data) => {
 trend.innerHTML = data;
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

const footer = document.querySelector(".footer-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/footer.html")
.then((res) => res.text())
.then((data) => {
  footer.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const more = document.querySelector(".more-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/women/more.html")
.then((res) => res.text())
.then((data) => {
  more.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));