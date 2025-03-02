const dateText = document.querySelector(".date");
const taskListCount = document.querySelector(".right-text");
const showList = document.querySelector(".task-list-all");
const db = JSON.parse(localStorage.getItem("swpData"));
const completeData = db.filter((data) => data.status === true);
const unCompleteData = db.filter((data) => data.status !== true);
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
            <input type="checkbox" checked />
            <span style="color: #6a6767">${data.job}</span>
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

// auto delete
if (
  dateFormat ==
  `${date.getDate() + 1} ${months[date.getMonth()]} ${date.getFullYear()}`
) {
  localStorage.setItem("swpData", JSON.stringify(unCompleteData));
  location.reload();
}
