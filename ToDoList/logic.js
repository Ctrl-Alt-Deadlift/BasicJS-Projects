const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText === '') {
    alert("You must specify a task!");
    return;
  }

  // Check for duplicate tasks
  const existingTasks = Array.from(listContainer.getElementsByTagName("li"));
  const taskExists = existingTasks.some(task => task.firstChild.textContent === taskText);

  if (taskExists) {
    alert("Task already exists");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;
  listContainer.appendChild(li);

  let cross = document.createElement("cross");
  cross.innerHTML = "\u00d7";
  li.appendChild(cross);

  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function (e) {

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }

  else if (e.target.tagName === "CROSS") {
    e.target.parentElement.remove();
  }

  saveData();

}, false);


inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});


function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}


function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();