/*=================================================================================
     Handle switch selection effect on click & Caculate annually price on switch change
================================================================================*/

const billingToggle = document.querySelector("#billing-toggle");
const monthly = document.querySelector(".monthly-label");
const annually = document.querySelector(".annually-label");

const priceAmounts = document.querySelectorAll(".price-amount");

const DISCOUNT_RATE = 0.2;
function calculateAnnualPrice(monthlyPrice, discount) {
  const annualTotal = monthlyPrice * 12;

  return Math.round(annualTotal * (1 - discount));
}

function setBilling(isAnnual) {
  billingToggle.checked = isAnnual;

  monthly.classList.toggle("text-green-500", !isAnnual);
  monthly.classList.toggle("text-gray-400", isAnnual);

  annually.classList.toggle("text-green-500", isAnnual);
  annually.classList.toggle("text-gray-400", !isAnnual);
}

monthly.addEventListener("click", () => {
  setBilling(false);
  priceAmounts.forEach((priceAmount) => {
    priceAmount.textContent = priceAmount.dataset.monthly;
  });
});

annually.addEventListener("click", () => {
  setBilling(true);

  priceAmounts.forEach((priceAmount) => {
    const monthlyPrice = Number(priceAmount.dataset.monthly);
    priceAmount.textContent = calculateAnnualPrice(monthlyPrice, DISCOUNT_RATE);
  });
});

// Keep text highlight in sync if checkbox state changes via keyboard
billingToggle.addEventListener("change", () => {
  setBilling(billingToggle.checked);
});

/*======================================
   Handle pricing card selection on click
======================================*/

const container = document.querySelector(".pricing-container");
const pricingCards = container.querySelectorAll(".pricing-card");

const classesToHighlight = ["lg:ring-1", "lg:ring-orange-500", "lg:scale-105"];

container.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".pricing-card");

  if (!clickedCard && clickedCard.classList.contains("lg:scale-105"));

  pricingCards.forEach((card) => card.classList.remove(...classesToHighlight));
  clickedCard.classList.add(...classesToHighlight);
});
