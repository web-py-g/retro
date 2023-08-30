let quections = document.querySelectorAll(".quections__title");

quections.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("open");
  });
});

let name_list_1 = document.getElementById("name_list_1");
let name_input_1 = document.querySelector("input[name=trip_name");
let names_1 = name_list_1.querySelectorAll(".name_list__item");

name_input_1.addEventListener("click", () => {
  name_list_1.classList.toggle("open");
});

names_1.forEach((el) => {
  el.addEventListener("click", () => {
    name_input_1.value = el.innerText;
    name_list_1.classList.remove("open");
  });
});

let name_list_2 = document.getElementById("name_list_2");
let name_input_2 = document.querySelector(".ticket_form input[name=trip_name");
let names_2 = name_list_2.querySelectorAll(".name_list__item");

name_input_2.addEventListener("click", () => {
  name_list_2.classList.toggle("open");
});

names_2.forEach((el) => {
  el.addEventListener("click", () => {
    name_input_2.value = el.innerText;
    name_list_2.classList.remove("open");
  });
});
