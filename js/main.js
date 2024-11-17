const btnToggle = document.getElementById("btn-toggle");
const list = document.getElementById("header-list");
const children = [...list.children];
const buttons = document.getElementsByClassName("days");
const btnContent = [...document.getElementsByClassName("tab-pane")];
const header = document.getElementsByTagName("header")[0];

const sections = document.querySelectorAll("section");

let current = "";
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }

  // Loop through sections to find which one is in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  // Remove "active" class from all links and add to the current section's link
  children.forEach((link) => {
    link.classList.remove("active");
    if (link.children[0].getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

children.forEach((ele) => {
  ele.addEventListener("click", () => {
    list.classList.remove("show");
  });
});
// window.onscroll = () => {

// };

// AOS.init({
//   duration: 800, // Duration of animations in milliseconds
//   offset: 100, // Offset in pixels before animation starts
// });

AOS.init({
  duration: 800,
  easing: "slide",
});

const btnDays = [...buttons];
btnDays.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      return;
    }
    btnDays.forEach((ele) => {
      ele.classList.remove("active");
    });
    btnContent.forEach((x) => {
      x.classList.remove("show");
      x.classList.remove("active");
    });
    btn.classList.add("active");
    btnContent[index].classList.add("show");
    btnContent[index].classList.add("active");
  });
});

btnToggle.addEventListener("click", (event) => {
  list.classList.toggle("show");
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
