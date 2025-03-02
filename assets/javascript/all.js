const allTaskList = document.querySelector(".task-list-all");
const taskListCount = document.querySelector(".right-text");

const checkDb = localStorage.getItem("swpData");
if (checkDb === null) {
  allTaskList.classList.add("hide");
  taskListCount.innerHTML = "0 items";
} else {
  allTaskList.classList.remove("hide");
}

const getData = JSON.parse(localStorage.getItem("swpData"));
taskListCount.innerHTML = `${getData.length} items`;
getData.map((data) => {
  const taskListStr =
    data.status === true
      ? `
              <li class="task-item" id=${data.id}>
            <input type="checkbox" checked/>
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
      : `
              <li class="task-item" id=${data.id}>
            <input type="checkbox" />
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
  allTaskList.innerHTML += taskListStr;
});
