// variables
const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");
const historySection = document.getElementById("history-section");
const cardsSection = document.getElementById("cards-section");
let mainBalance = parseFloat(document.getElementById("main-balance").innerText);
const mainBalanceSection = document.getElementById("main-balance");
const noakhaliDonateBtn = document.getElementById("noakali-donate-btn");
const totalNoakhaliDonateElement = document.getElementById(
  "noakhali-total-donate"
);
const feniDonateBtn = document.getElementById("feni-donate-btn");
const totalFeniDonateElement = document.getElementById("feni-total-donate");
const quotaDonateBtn = document.getElementById("quota-donate-btn");
const totalQuotaDonateElement = document.getElementById("quota-total-donate");

// common function
const getInputValueByID = function getInputValueByID(ID) {
  const inputValue = parseFloat(document.getElementById(ID).value);
  return inputValue;
};

const getElementValueByID = function getElementValueByID(ID) {
  const elementValue = parseFloat(document.getElementById(ID).innerText);
  return elementValue;
};

// donate and history button functions

historyBtn.addEventListener("click", function () {
  historySection.classList.remove("hidden");
  cardsSection.classList.add("hidden");
  historyBtn.classList.add("bg-primary");
  donateBtn.classList.remove("bg-primary");
});

donateBtn.addEventListener("click", function () {
  historySection.classList.add("hidden");
  cardsSection.classList.remove("hidden");
  donateBtn.classList.add("bg-primary");
  historyBtn.classList.remove("bg-primary");
});

// donation functions starts

// noakhali btn function
noakhaliDonateBtn.addEventListener("click", function () {
  const noakhaliDonateAmount = getInputValueByID("noakhali-donate-amount");
  if (isNaN(noakhaliDonateAmount)) {
    alert("Invalid input given");
  } else if (noakhaliDonateAmount > mainBalance) {
    alert("You do not have sufficient balance");
  } else if (noakhaliDonateAmount < 1) {
    alert("Minimum donate amount is 01 TK");
  } else {
    mainBalance = mainBalance - noakhaliDonateAmount;
    mainBalanceSection.innerText = mainBalance;
    let totalNoakhaliDonate = getElementValueByID("noakhali-total-donate");
    totalNoakhaliDonate = totalNoakhaliDonate + noakhaliDonateAmount;
    totalNoakhaliDonateElement.innerText = totalNoakhaliDonate;
    // added history
    const section = document.createElement("section");
    const currentDate = new Date();
    section.innerHTML = `<h1 class="font-extrabold text-2xl py-2">${noakhaliDonateAmount} TAKA is donated for famine-2024 at Noakhali, Bangladesh</h1>
                        <p>${currentDate}</p>
    `;
    historySection.appendChild(section);
    alert("Donation Successful");
  }
});

// feni button function

feniDonateBtn.addEventListener("click", function () {
  const feniDonateAmount = getInputValueByID("feni-donate-amount");
  if (isNaN(feniDonateAmount)) {
    alert("Invalid input given");
  } else if (feniDonateAmount > mainBalance) {
    alert("You do not have sufficient balance");
  } else if (feniDonateAmount < 1) {
    alert("Minimum donate amount is 01 TK");
  } else {
    mainBalance = mainBalance - feniDonateAmount;
    mainBalanceSection.innerText = mainBalance;
    let totalFeniDonate = getElementValueByID("feni-total-donate");
    totalFeniDonate += feniDonateAmount;
    totalFeniDonateElement.innerHTML = totalFeniDonate;
    // added history

    const section = document.createElement("section");
    const currentDate = new Date();
    section.innerHTML = `<h1 class="font-extrabold text-2xl py-2">${feniDonateAmount} TAKA is donated for Flood Relief in Feni,Bangladesh</h1>
                        <p>${currentDate}</p>
    `;
    historySection.appendChild(section);
    alert("Donation Successful");
  }
});

// quota movement function

quotaDonateBtn.addEventListener("click", function () {
  const quotaDonateAmount = getInputValueByID("quota-donate-amount");
  if (isNaN(quotaDonateAmount)) {
    alert("Invalid input given");
  } else if (quotaDonateAmount > mainBalance) {
    alert("You do not have sufficient balance");
  } else if (quotaDonateAmount < 1) {
    alert("Minimum donate amount is 01 TK");
  } else {
    mainBalance = mainBalance - quotaDonateAmount;
    mainBalanceSection.innerText = mainBalance;
    let totalQuotaDonate = getElementValueByID("quota-total-donate");
    totalQuotaDonate += quotaDonateAmount;
    totalQuotaDonateElement.innerHTML = totalQuotaDonate;
    // added history

    const section = document.createElement("section");
    const currentDate = new Date();
    section.innerHTML = `<h1 class="font-extrabold text-2xl py-2">${quotaDonateAmount} TAKA is donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                        <p>${currentDate}</p>
    `;
    historySection.appendChild(section);
    alert("Donation Successful");
  }
});
