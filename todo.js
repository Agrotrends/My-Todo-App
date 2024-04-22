const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	const taskText = taskInput.value;
	if (taskText !== ''){
        const taskTime = prompt( 'Enter the time for the task (e.g., 12:00 PM)');
        const taskDate = prompt( 'Enter the date for the task (e.g., 2024-04-22)');
		const taskListItem = document.createElement('li');
		taskListItem.textContent = `${taskText} - Time: ${taskTime} - Date: ${taskDate}`;
		taskList.appendChild(taskListItem);
		taskInput.value = '';
	}
}

