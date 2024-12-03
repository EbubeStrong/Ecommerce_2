function copyMenu() {
  let depCategory = document.querySelector(".dpt-cat");
  let depPlace = document.querySelector(".departments");

  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");

  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");

  depPlace.innerHTML = depCategory.innerHTML;

  navPlace.innerHTML = mainNav.innerHTML;

  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// show aside mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addclass = document.querySelector(".site");

menuButton.addEventListener("click", () => {
  addclass.classList.add("showmenu");
});

closeButton.addEventListener("click", () => {
  addclass.classList.remove("showmenu");
});

document.addEventListener("click", (event) => {
  // console.log("Clicked element:", event.target);

  if (!addclass.contains(event.target) && !menuButton.contains(event.target)) {
    if (document.documentElement && document.querySelector("main")) {
      // console.log('clicked')
      addclass.classList.remove("showmenu");
    }
  }
});

const submenu = document.querySelectorAll(".site-off .has-child .icon-small.i");

// Attach event listener to each submenu item
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();

  // Collapse all other submenus
  submenu.forEach((item) => {
    if (item !== this) {
      const parent = item.closest(".has-child");

      if (parent) {
        parent.classList.remove("expand");

        const dropdown = parent.querySelector(":where(ul, .mega)");
        if (dropdown) dropdown.style.maxHeight = "0";
      }
    }
  });

  const parent = this.closest(".has-child");

  if (parent) {
    const dropdown = parent.querySelector(":where(ul, .mega)");
    const iconTurn = this;

    if (!parent.classList.contains("expand")) {
      parent.classList.add("expand");
      // iconAtWomenSection.add("expand")

      if (dropdown) dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      if (iconTurn) iconTurn.style.transform = "rotate(270deg)";
    } else {
      parent.classList.remove("expand");
      if (dropdown) dropdown.style.maxHeight = "0";
      if (iconTurn) iconTurn.style.transform = "rotate(90deg)";
    }
  }
}

// Icon thats making me reason my life
const submenuTwo = document.querySelector(
  ".off-canvas nav > ul .fSection .icon-small"
);
submenuTwo.addEventListener("click", toggleTwo);

function toggleTwo(e) {
  e.preventDefault();

  const parent = document.querySelector(".off-canvas nav > ul .fSection");
  const dropdown = parent.querySelector(":where(ul, .mega)");

  if (parent && dropdown) {
    if (!parent.classList.contains("expand")) {
      parent.classList.add("expand");

      dropdown.style.maxHeight = dropdown.scrollHeight + "px";

      submenuTwo.style.transform = "rotate(180deg)";
    } else {
      parent.classList.remove("expand");
      dropdown.style.maxHeight = "0";

      submenuTwo.style.transform = "rotate(0deg)";
    }
  }
}

// slider
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500, // The time between each slide transition (in milliseconds)
      disableOnInteraction: false, // Keep autoplay even if the user interacts with the swiper
    },
  });
});


// Countdown Timer
// Set the initial time (for example, 1 hour, 15 minutes, 27 seconds, and 00 milliseconds)
let hours = 1;
let minutes = 15;
let seconds = 27;
let milliseconds = 0;

// Function to update the countdown
function updateCountdown() {
  document.query
}

// Set the interval to update the countdown every 10 milliseconds
let countdownInterval = setInterval(updateCountdown, 10);
