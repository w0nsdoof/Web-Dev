let todoList = [];

function renderTodoList() {
    const todoListTable = document.getElementById('todoList');
    todoListTable.innerHTML = '';

    todoList.forEach((task, index) => {
        const row = document.createElement('tr');

        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.addEventListener('change', () => {
            toggleTaskStatus(index);
        });
        checkboxCell.appendChild(checkbox);

        const taskCell = document.createElement('td');
        taskCell.classList.add('task-cell');
        const taskText = document.createElement('span');
        taskText.textContent = task.task;
        if (task.done) {
            taskText.classList.add('completed-task');
        }
        taskText.classList.add('task-text');
        taskCell.appendChild(taskText);

        const deleteCell = document.createElement('td');
        const deleteIcon = document.createElement('div');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.addEventListener('click', () => {
            deleteTask(index);
        });
        deleteCell.appendChild(deleteIcon);

        row.appendChild(checkboxCell);
        row.appendChild(taskCell);
        row.appendChild(deleteCell);

        todoListTable.appendChild(row);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        todoList.push({ task: task, done: false });
        renderTodoList();
        taskInput.value = '';
    }
}

function toggleTaskStatus(index) {
    todoList[index].done = !todoList[index].done;
    renderTodoList();
}

function deleteTask(index) {
    todoList.splice(index, 1);
    renderTodoList();
}