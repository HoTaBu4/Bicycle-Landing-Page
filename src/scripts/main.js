"use strict";

const menu = document.querySelector(".burger__logo");
const body = document.querySelector("body");
const navItem = document.querySelectorAll(".burger__nav-LIst-Item");
const submitButton = document.querySelector("#button_submit");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});

navItem.forEach((elem) => {
  elem.addEventListener("click", () => {
    menu.classList.remove("active");
    body.classList.remove("overflow-hidden");
  });
});

const handlesSetEmptyFields = () => {
  const nameInput = document.querySelector(".form__name");
  const textarea = document.querySelector(".form__textarea");
  const emailInput = document.querySelector(".form__email");

  nameInput.value = "";
  textarea.value = "";
  emailInput.value = "";
};

if (submitButton) {
  submitButton.addEventListener("click", () => {
    setTimeout(handlesSetEmptyFields, 1000);
  });
}
