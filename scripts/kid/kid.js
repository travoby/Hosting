const navkid = document.querySelector(".navkid-layout");
fetch("../../components/kid/navkid.html")
.then((res) => res.text())
.then((data) => {
navkid.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const hero = document.querySelector(".hero-layout");
fetch("../../components/kid/hero.html")
.then((res) => res.text())
.then((data) => {
hero.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const size = document.querySelector(".size-layout");
fetch("../../components/kid/size.html")
.then((res) => res.text())
.then((data) => {
size.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


const popular = document.querySelector(".popular-layout");
fetch("../../components/kid/popular.html")
.then((res) => res.text())
.then((data) => {
popular.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const trend = document.querySelector(".trending-layout");
fetch("../../components/kid/trending.html")
.then((res) => res.text())
.then((data) => {
trend.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

const more = document.querySelector(".more-layout");
fetch("../../components/kid/more.html")
.then((res) => res.text())
.then((data) => {
more.innerHTML = data;
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

const footkid = document.querySelector(".footer-layout");
document.addEventListener("DOMContentLoaded", function() {})
fetch("../../components/kid/footer.html")
.then((res) => res.text())
.then((data) => {
  footkid.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));