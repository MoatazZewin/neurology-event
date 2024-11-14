const btnToggle = document.getElementById("btn-toggle");
const list = document.getElementById("header-list");
const children = [...list.children];
const header = document.getElementsByTagName("header")[0];
let total = document.getElementById("total");

function onChange(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    let x = +total.innerText + 50;
    total.innerHTML = x;
  } else {
    let x = +total.innerText - 50;
    total.innerHTML = x;
  }
}
btnToggle.addEventListener("click", (event) => {
  list.classList.toggle("show");
  children.forEach((ele) => {
    ele.classList.toggle("show");
  });
});

window.onscroll = () => {
  if (window.scrollY == 0) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
};
