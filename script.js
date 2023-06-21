// Function to add a task
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  
  if (task === "") {
    alert("Please enter a task!");
    return;
  }
  
  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.appendChild(document.createTextNode(task));
  li.appendChild(span);
  
  var removeCheckbox = document.createElement("input");
  removeCheckbox.type = "checkbox";
  li.appendChild(removeCheckbox);
  
  taskList.appendChild(li);
  input.value = "";
}

// Add event listener to the "Add Task" button
var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);

// Add event listener to the input field to handle "Enter" key press
var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      addTask();
  }
});

// Function to remove selected tasks
function removeSelectedTasks() {
  var checkboxes = document.querySelectorAll("#taskList input[type='checkbox']");
  
  for (var i = checkboxes.length - 1; i >=0; i--) {
      if (checkboxes[i].checked) {
          checkboxes[i].parentNode.remove();
      }
  }
}

// Add event listener to the "Remove Selected" button
var removeSelectedBtn = document.getElementById("removeSelectedBtn");
removeSelectedBtn.addEventListener("click", removeSelectedTasks);

// Function to clear all tasks
function clearAllTasks() {
  var taskList = document.getElementById("taskList");
  
  while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
  }
}

// Add event listener to the "Clear All" button
var clearAllBtn = document.getElementById("clearAllBtn");
clearAllBtn.addEventListener("click", clearAllTasks);

// Toggle dark mode
var darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Function to toggle strikethrough effect
function toggleTaskCompletion(event) {
  var checkbox = event.target;
  var taskText = checkbox.parentNode.querySelector("span");
  
  if (checkbox.checked) {
    taskText.classList.add("completed");
  } else {
    taskText.classList.remove("completed");
  }
}

// Add event listener to the checkboxes
var checkboxes = document.querySelectorAll("#taskList input[type='checkbox']");
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", toggleTaskCompletion);
});

