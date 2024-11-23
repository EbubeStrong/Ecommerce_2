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

  console.log("Clicked element:", event.target);

  if (!addclass.contains(event.target) && !menuButton.contains(event.target)) {
    if(document.body) addclass.classList.remove("showmenu");
  }
});
      


const submenu = document.querySelectorAll(".site-off .has-child .icon-small");

submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();

  submenu.forEach((item) => {
    if (item !== this) {
      const parent = item.closest(".has-child");
      
      if (parent) {
        parent.classList.remove("expand");

        const dropdown = parent.querySelector(":where(ul, .mega)");
        if (dropdown) dropdown.style.maxHeight = "0";

        const iconTurn = parent.querySelector(".icon-small");
        if (iconTurn) iconTurn.style.transform = "rotate(90deg)";
      }
    }
  });

  const parent = this.closest(".has-child");

  if (parent) {
    const dropdown = parent.querySelector(":where(ul, .mega)");
    const iconTurn = this;

    if (!parent.classList.contains("expand")) {
      parent.classList.add("expand");
      if (dropdown) dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      if (iconTurn) iconTurn.style.transform = "rotate(270deg)";
    } else {
      parent.classList.remove("expand");
      if (dropdown) dropdown.style.maxHeight = "0";
      if (iconTurn) iconTurn.style.transform = "rotate(90deg)";
    }
  } 
}
