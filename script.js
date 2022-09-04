let Clicks = 0;

document
  .getElementById("clicks")
  .addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

  document
    .getElementById("clicks-count")
    .innerHTML = (++Clicks) + '';
});


