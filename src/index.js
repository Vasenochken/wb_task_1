import "./js/counter.js";
import "./js/deleteElement.js";

const boxAccordion = document.querySelector(".cart__accordion--lack");
const btnAccordion = document.getElementById("accordion");
const hiddenItem = document.querySelector(".cart__list");
const infoList = document.querySelector(".cart__accordion_wrapper");
const checkbox = document.querySelector(".cart__label_checkbox--all");

btnAccordion.addEventListener("click", () => {
  console.log("click accordion");
  boxAccordion.classList.toggle("cart__accordion_view--lack");
  checkbox.classList.toggle("hidden");
  infoList.classList.toggle("hidden");
  btnAccordion.classList.toggle("accordion_view");
  hiddenItem.classList.toggle("cart__list_hidden");
});
