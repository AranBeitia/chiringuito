var btnBuy = document
    .querySelector("#to-buy")
    .addEventListener("click", goToShopping);

var shoppingChart = document.querySelector("#carrito");
var productChart = document.querySelector("#producto");

function goToShopping() {
    shoppingChart.classList.toggle("is-visible");
    productChart.classList.toggle("is-hidden");
}