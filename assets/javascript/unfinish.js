const dateText = document.querySelector(".date");
const taskListCount = document.querySelector(".right-text");
const showList = document.querySelector(".task-list-all");
const db = JSON.parse(localStorage.getItem("swpData"));
const completeData = db.filter((data) => data.status === false);
taskListCount.innerHTML = `${completeData.length} items`;

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
dateText.innerHTML = dateFormat;

// show list

completeData.map((data) => {
  const listStr = `<li class="task-item" id=${data.id}>
            <input class="check" type="checkbox"/>
            <span>${data.job}</span>
            <div class="actions">
              <button>
                <img src="/assets/icons/palette-solid.svg" alt="Edit" />
              </button>
              <button class="delete">
                <img src="/assets/icons/trash-solid.svg" alt="Delete" />
              </button>
            </div>
          </li>`;
  showList.innerHTML += listStr;
});

// complete

const isCheck = document.querySelectorAll(".check");
isCheck.forEach((d) =>
  d.addEventListener("click", () => {
    const db = JSON.parse(localStorage.getItem("swpData"));
    const currentData = db.find((data) => data.id == d.parentElement.id);
    const isNotCurrentData = db.filter((data) => data.id != d.parentElement.id);
    currentData.status = !currentData.status;
    const updateData = [...isNotCurrentData, currentData];
    localStorage.setItem("swpData", JSON.stringify(updateData));
    location.reload();
  })
);
