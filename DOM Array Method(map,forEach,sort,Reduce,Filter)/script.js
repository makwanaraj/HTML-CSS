const main = document.getElementById("main");
const add_userBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const sortBtn = document.getElementById("sort");
const calculate_wealthBtn = document.getElementById("calculate_wealth");

let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();

//Fetch Random user and add Money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function addData(obj) {
  data.push(obj);

  updateDOM();
}

//Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//Format number as money
function formatMoney(number) {
  return "₹" + number.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,");
}

//Event Listeners
add_userBtn.addEventListener("click", getRandomUser);