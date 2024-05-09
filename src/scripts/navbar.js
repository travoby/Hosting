
    const navbar = document.querySelector(".navbar-layout");
    fetch("../layout/navbar.html")
      .then((res) => res.text())
      .then((data) => {
    // Mouse hover on Navbar
    
        navbar.innerHTML = data;
        const newBtn = document.getElementById("new-btn")
        console.log(newBtn)
        const listContainerNew = document.getElementById("list-container-new")
        function showContainer() {
          //listContainerNew.classList.remove("top-[-100%]")
          listContainerNew.classList.add("top-[7%]")
        }
        function hideContainer() {
          //listContainerNew.classList.add("top-[-100%]")
          listContainerNew.classList.remove("top-[7%]")
        }
        newBtn.addEventListener('mouseenter', showContainer)
        listContainerNew.addEventListener('mouseleave', hideContainer)
    
        const MenBTN = document.querySelector("#men-btn");
        MenBTN.addEventListener("mouseover", showContainer)
    
    
        const WomenBTN = document.querySelector("#women-btn");
        WomenBTN.addEventListener("mouseover", showContainer)
    
        const KidBTN = document.querySelector("#kid-btn");
        KidBTN.addEventListener("mouseover", showContainer)
    
        const SaleBTN = document.querySelector("#sale-btn");
        SaleBTN.addEventListener("mouseover", showContainer)

// Humberger

         // side bar
      const minMenuDropdown = document.querySelector("#minMenuDropdown");
      // open and close sidebar
      const menuButton = document.getElementById("menuButton");

      menuButton.addEventListener("click", () => {
        const menuIcon = document.getElementById("menuIcon");
        // Toggle the 'active' class on the menu button
        menuButton.classList.toggle("active");
        // Toggle between menu icon and close icon
        if (menuButton.classList.contains("active")) {
          menuIcon.innerHTML =
            '<img  src="https://logowik.com/content/uploads/images/close1437.jpg" alt="Close">'; // Set close icon HTML
          minMenuDropdown.style.right = "0%";
          document.body.classList.add("overflow-hidden")
        } else {
          menuIcon.innerHTML =
            '<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png">'; // Set menu icon HTML
          minMenuDropdown.style.right = "-100%";
          document.body.classList.remove("overflow-hidden")
        }
      });
    
    
      })
      .catch((error) => console.error("Error fetching included file:", error));