const textDate = document.querySelector(".date");
const createButton = document.querySelector(".create");
const createBox = document.querySelector(".create-box");
const closeButton = document.querySelector(".closeButton");
const inputData = document.querySelector(".addInputBox");
const schedule = document.querySelector("#schedules");
const addButton = document.querySelector(".add-btn");
const showList = document.querySelector(".show-list");
const showBox = document.querySelector(".box");

const date = new Date(Date.now());
console.log(date);
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

// check localStorage & change UI
const checkDb = localStorage.getItem("swpData");
if (checkDb === null) {
  showBox.classList.remove("hide");
  showList.classList.add("hide");
} else {
  showList.classList.remove("hide");
  showBox.classList.add("hide");
}

// Date format
console.log(date.getMonth());
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

// add job
addButton.addEventListener("click", () => {
  const checkData = localStorage.getItem("swpData");
  if (checkData === null) {
    localStorage.setItem("swpData", `[]`);
  }

  const jobData = {
    id: Date.now(),
    job: inputData.value,
    time: schedule.value,
    status: false,
  };
  console.log(schedule.value);

  const oldData = JSON.parse(localStorage.getItem("swpData"));
  oldData.push(jobData);
  localStorage.setItem("swpData", JSON.stringify(oldData));
  // location.reload();
});
