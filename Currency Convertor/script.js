const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");

const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch Currenct Convertion & update DOM

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/[api_key]/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

//Event Listener

currencyEl_one = addEventListener("change", calculate);
amountEl_one = addEventListener("input", calculate);
currencyEl_one = addEventListener("change", calculate);
amountEl_two = addEventListener("input", calculate);

calculate();
