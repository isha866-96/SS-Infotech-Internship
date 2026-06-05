// Load tasks when page opens
window.onload = function () {
    loadTasks();
};

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    createTask(task);
    saveTask(task);

    input.value = "";
}

function createTask(task) {

    let li = document.createElement("li");
    li.setAttribute("data-task", task);

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
    `;

    document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task);
    });
}

function deleteTask(button) {

    let li = button.parentElement;
    let taskText = li.getAttribute("data-task");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(task => task !== taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    li.remove();
}