var btnBuy = document
    .querySelector("#to-buy")
    .addEventListener("click", goToShopping);

var shoppingChart = document.querySelector("#carrito");
var productChart = document.querySelector("#producto");

function goToShopping() {
    shoppingChart.classList.toggle("is-visible");
    productChart.classList.toggle("is-hidden");
}

/**  VALIDATIONS */
const nameInput = document.querySelector('input');
// const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('este campo es requerido!, no te dejo pasar');
  } else {
    nameInput.setCustomValidity('Sólo nombres con letras upper y lowercases. Vuelve a intentarlo!');
  }
});

