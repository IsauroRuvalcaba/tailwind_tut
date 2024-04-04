const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    // this inserts or remove the class if not in there or is in there. Could also do this in a different type of function. More than one way to do this
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    //this below, when mobile size, it turns hamburger to X when clicked. and reverse.
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
