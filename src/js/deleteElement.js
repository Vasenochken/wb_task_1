const listProduct = document.querySelector(".cart__list");
const amountItems = listProduct.querySelectorAll("li");
const counter = document.querySelector(".tabbar__cart_counter");
const btnCart = document.querySelector(".icon--cart");
const countValueView = document.querySelector(".tabbar__counter_value");
let amount = amountItems.length;

const del = document.querySelectorAll(".cart__item_button_del");

function viewAmountCardProduct(amount) {
  if (amount < 0) {
    btnCart.classList.add("icon--cart_active");
    counter.classList.add("tabbar__cart_counter_view");
  } else if (amount === 0) {
    btnCart.classList.remove("icon--cart_active");
    counter.classList.remove("tabbar__cart_counter_view");
  }
  countValueView.textContent = amount;
}

del.forEach((btn) => {
  btn.onclick = function () {
    delItem(this);
  };
});

function delItem(btn) {
  const item = btn.closest("li");
  item.remove();
  amount--;
  viewAmountCardProduct(amount);
}
