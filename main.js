let btnToggle = document.getElementById("btn-toggle");
let list = document.getElementById("header-list");
let children = [...list.children];
console.log(children);

btnToggle.addEventListener("click", (event) => {
  list.classList.toggle("show");
  children.forEach((ele) => {
    ele.classList.toggle("show");
  });
});

const eventDate = new Date("December 12, 2024 09:44:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  // Get current date and time
  const now = new Date().getTime();

  // Calculate the difference
  const timeRemaining = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in each respective div
  document.getElementById("days").textContent = `${days}`;
  document.getElementById("hours").textContent = `${hours}`;
  document.getElementById("minutes").textContent = `${minutes}`;
  document.getElementById("seconds").textContent = `${seconds}`;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("days").textContent = "0d";
    document.getElementById("hours").textContent = "0h";
    document.getElementById("minutes").textContent = "0m";
    document.getElementById("seconds").textContent = "0s";
    document.getElementById("countdown").textContent = "The event has started!";
  }
}, 1000);
