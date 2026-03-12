const cards = document.querySelectorAll("[data-move]");

document.addEventListener("click", function (e) {
  cards.forEach((card) => {
    if (card.contains(e.target)) {
      card.dataset.move = card.dataset.move !== "true";
    } else {
      card.dataset.move = "false";
    }
  });
});
