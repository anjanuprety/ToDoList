function addTask() {
  let description = document.getElementById("taskInput").value.trim();
  let date = document.getElementById("taskDate").value;
  let time = document.getElementById("taskTime").value;

  if (description === "" || date === "" || time === "") {
    alert("Please fill in all fields!");
    return;
  }

  let taskList = document.getElementById("taskList");
  let listItem = document.createElement("li");

  let detailsDiv = document.createElement("div");
  detailsDiv.className = "task-details";
  detailsDiv.innerHTML = `<strong>${description}</strong><br>Due: ${date} at ${time}`;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => taskList.removeChild(listItem);

  listItem.appendChild(detailsDiv);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  document.getElementById("taskInput").value = "";
  document.getElementById("taskDate").value = "";
  document.getElementById("taskTime").value = "";
}
