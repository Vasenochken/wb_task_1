const listItems = document.querySelectorAll(".cart__item");
const totalAmount = document.querySelector(".cart__accordion_amount");
const totalPrice = document.querySelector(".cart__accordion_total");
const arrCountValue = document.querySelectorAll(".cart__counter_value");
const arrPrice = document.querySelectorAll(".cart__item_price");

function sumTotalAmount() {
  let amount = 0;
  arrCountValue.forEach((item) => {
    amount += parseInt(item.textContent);
  });
  totalAmount.textContent = amount;
}

function sumTotalPrice() {
  let sumPrice = 0;
  arrPrice.forEach((item) => {
    sumPrice += parseFloat(item.textContent);
  });
  totalPrice.textContent = sumPrice;
}

listItems.forEach((item) => {
  const decButton = item.querySelector(".cart__counter_dec");
  const incButton = item.querySelector(".cart__counter_inc");
  const countElement = item.querySelector(".cart__counter_value");
  const priceElement = item.querySelector(".cart__item_price");
  const price = parseFloat(priceElement.textContent);

  function updatePriceAndButtonState() {
    const count = parseInt(countElement.textContent);
    if (count <= 1) {
      decButton.setAttribute("disabled", "disabled");
    } else {
      decButton.removeAttribute("disabled");
    }
    if (count >= 200) {
      incButton.setAttribute("disabled", "disabled");
    } else {
      incButton.removeAttribute("disabled");
    }
    priceElement.textContent = (count * price).toFixed(0);
    sumTotalAmount();
    sumTotalPrice();
  }

  decButton.addEventListener("click", () => {
    let count = parseInt(countElement.textContent);
    if (count > 1) {
      count--;
      countElement.textContent = count;
      updatePriceAndButtonState();
      priceElement.textContent = (count * price).toFixed(0);
    }
  });

  incButton.addEventListener("click", () => {
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
    updatePriceAndButtonState();
    priceElement.textContent = (count * price).toFixed(0);
  });
  updatePriceAndButtonState();
});
