const textDate = document.querySelector(".date");
const createButton = document.querySelector(".create");
const createBox = document.querySelector(".create-box");
const closeButton = document.querySelector(".closeButton");
const inputData = document.querySelector(".addInputBox");
const schedule = document.querySelector("#schedules");
const addButton = document.querySelector(".add-btn");

const date = new Date(Date.now());
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Date format
const dateFormat = `${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()}`;
textDate.innerHTML = dateFormat;

// create button
createButton.addEventListener("click", () => {
  createBox.classList.remove("hide");
  createButton.classList.add("hide");
});

// close button
closeButton.addEventListener("click", () => {
  createButton.classList.remove("hide");
  createBox.classList.add("hide");
});

addButton.addEventListener("click", () => {
  const todayDate = `${date.getFullYear()}-${
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
  }-${date.getDate()}`;
  // console.log(inputData.value);
  // console.log(schedule.value);
  // console.log(todayDate);
  // console.log(schedule.value === todayDate);
  const jobData = {
    id: Date.now(),
    job: inputData.value,
    time: schedule.value,
    status: false,
  };
  console.log(jobData);

  const check = localStorage.getItem("swpData");
  console.log(check);
  if (check !== null) {
    console.log(check);
  } else {
    localStorage.setItem("swpData", [JSON.stringify(jobData)]);
  }
});
