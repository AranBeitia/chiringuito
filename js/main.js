var btnBuy = document
	.querySelector('#to-buy')
	.addEventListener('click', goToShopping)

var productChart = document.querySelector('#producto')
var shoppingChart = document.querySelector('#carrito')

var formProfile = document.querySelector('#form-profile')
var formAddress= document.querySelector('#form-address')

function goToShopping() {
  shoppingChart.classList.replace('is-hidden', 'is-visible')
  productChart.classList.add('is-hidden')
}

/**  VALIDATIONS */
const nameInput = document.querySelector('#name')
document.getElementById('button-next').addEventListener('click', sendForm)

function sendForm(e) {
  e.preventDefault();
  var valuename = nameInput.value

  let regex = /[A-Za-z]+/
  if(valuename === '' || !regex.test(valuename) ) {
    alert('no vale')
  } else {
    formProfile.classList.add('is-hidden')
    formAddress.classList.replace('is-hidden', 'is-visible')
  }
}
