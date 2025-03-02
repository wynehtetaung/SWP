const taskListCount = document.querySelector(".right-text");
const taskList = document.querySelector(".task-list");

// get data & today data show

const todayDate = `${date.getFullYear()}-${
  date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
}-${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}`;
const getData = JSON.parse(localStorage.getItem("swpData"));
console.log(getData);
const todayData = getData.filter((td) => td.time === todayDate);
console.log(todayData);

taskListCount.innerHTML = `${todayData.length} items`;
todayData.map((data) => {
  const listStr =
    data.status === true
      ? `<li class="task-item line" id=${data.id}>
              <input  class="check" type="checkbox" ${
                data.status ? "checked" : ""
              }/>
              <span>${data.job}</span>
              <div class="actions">
              <button>
              <img src="/assets/icons/palette-solid.svg" alt="Edit" />
              </button>
              <button class="delete">
              <img src="/assets/icons/trash-solid.svg" alt="Delete" />
              </button>
              </div>
              </li>`
      : `<li class="task-item" id=${data.id}>
              <input  class="check" type="checkbox" ${
                data.status ? "checked" : ""
              }/>
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

  taskList.innerHTML += listStr;
});

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
