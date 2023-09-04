let quections = document.querySelectorAll(".quections__title");

quections.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("open");
  });
});

let name_list_1 = document.getElementById("name_list_1");
let name_input_1 = document.querySelector("input[name=trip_name");
let names_1 = name_list_1.querySelectorAll(".name_list__item");
let flag1 = false;
let flag2 = false;
let flag3 = false;

name_input_1.addEventListener("click", () => {
  if (flag1 == false) name_list_1.classList.toggle("open");
  else {
    flag1 = false;
  }
});

names_1.forEach((el) => {
  el.addEventListener("click", () => {
    flag1 = true;
    name_input_1.value = el.innerText;
    name_list_1.classList.remove("open");
  });
});

let name_list_2 = document.getElementById("name_list_2");
let name_input_2 = document.querySelector(".ticket_form input[name=trip_name");
let names_2 = name_list_2.querySelectorAll(".name_list__item");

name_input_2.addEventListener("click", () => {
  if (flag2 == false) name_list_2.classList.toggle("open");
  else {
    flag2 = false;
  }
});

names_2.forEach((el) => {
  el.addEventListener("click", () => {
    flag2 = true;
    name_input_2.value = el.innerText;
    name_list_2.classList.remove("open");
  });
});

let name_list_3 = document.getElementById("name_list_3");
let name_input_3 = document.querySelector(".lastform_form input[name=trip_name");
let names_3 = name_list_3.querySelectorAll(".name_list__item");

name_input_3.addEventListener("click", () => {
  if (flag3 == false) name_list_3.classList.toggle("open");
  else {
    flag3 = false;
  }
});

names_3.forEach((el) => {
  el.addEventListener("click", () => {
    flag3 = true;
    name_input_3.value = el.innerText;
    name_list_3.classList.remove("open");
  });
});