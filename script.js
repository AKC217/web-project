document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function manageTask(event) {
        const target = event.target;

        // Toggle completion status
        if (target.tagName === 'SPAN') {
            target.parentElement.classList.toggle('completed');
        }

        // Delete task
        if (target.tagName === 'BUTTON') {
            target.parentElement.remove();
        }
    }
});