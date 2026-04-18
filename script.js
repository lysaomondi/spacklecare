







function goToCart() {
  window.location.href = "cart.html";
}





function removeItem(button) {
  let item = button.parentElement;
  item.remove(); // removes item from cart
  updateTotal();
}

function checkout() {
  document.getElementById("cart").innerHTML = "";
  document.getElementById("cart").style.display = "none";

  document.getElementById("message").style.display = "block";
}

function updateTotal() {
  let prices = document.querySelectorAll(".cart-details p");
  let total = 0;

  prices.forEach(p => {
    total += parseInt(p.innerText.replace("Ksh", ""));
  });

  document.getElementById("total").innerText = "Total: Ksh " + total;
}