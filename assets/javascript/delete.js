const deleteButton = document.querySelectorAll(".delete");
deleteButton.forEach((del) =>
  del.addEventListener("click", () => {
    const confirmData = confirm("are you sure?");
    if (confirmData) {
      const db = JSON.parse(localStorage.getItem("swpData"));
      const unDeleteData = db.filter(
        (data) => data.id != del.parentElement.parentElement.id
      );
      const updateData = JSON.stringify(unDeleteData);
      localStorage.setItem("swpData", updateData);
      location.reload();
    }
  })
);
