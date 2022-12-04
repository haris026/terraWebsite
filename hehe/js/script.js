let hamburgerMenu = document.querySelector(".cizburger");
let hamburgerClose = document.querySelector(".cizburger__close");
let hamburger = document.querySelector(".root__header__linije");
let registerClose = document.querySelector(".register__close");
let registerKlik = document.querySelector(".root__header__login__medlem");
let registerTransform = document.querySelector(".register");
let pozadina = document.querySelector("#registerBG");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("cizburgertransition");
  //   registerTransform.classList.remove("registertransition");
});

hamburgerClose.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("cizburgertransition");
  //   registerTransform.classList.remove("registertransition");

});

registerKlik.addEventListener("click", () => {
  registerTransform.classList.toggle("registertransition");
  pozadina.classList.toggle("hidden");
});

registerClose.addEventListener("click", () => {
  registerTransform.classList.toggle("registertransition");
  pozadina.classList.toggle("hidden");
});
