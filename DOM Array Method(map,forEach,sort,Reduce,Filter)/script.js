const main = document.getElementById("main");
const add_userBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showCrorepatiBtn = document.getElementById("show_crorepati");
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

// Double everyone money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

//Sort user by Crorepati
function sortRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

//Show only Crorepati person in a list
function showCrorepati() {
  data = data.filter((user) => user.money > 10000000);

  updateDOM();
}

// Add new  obj to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//Calculate all users wealth money
function calculateWeatlh() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
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
doubleBtn.addEventListener("click", doubleMoney);
showCrorepatiBtn.addEventListener("click", showCrorepati);
sortBtn.addEventListener("click", sortRichest);
calculate_wealthBtn.addEventListener("click", calculateWeatlh);
