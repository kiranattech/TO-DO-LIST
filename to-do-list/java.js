document.getElementById('new-task-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the input value
  const taskText = document.getElementById('new-task-input').value;

  // Clear the input field
  document.getElementById('new-task-input').value = '';

  // Create a new task element
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  // Create content and actions elements
  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.innerHTML = `<input type="text" class="text" value="${taskText}" readonly>`;

  const actionsElement = document.createElement('div');
  actionsElement.classList.add('actions');
  actionsElement.innerHTML = '<button class="edit">Edit</button><button class="delete">Delete</button>';

  // Append content and actions to the task element
  taskElement.appendChild(contentElement);
  taskElement.appendChild(actionsElement);

  // Append the task element to the tasks container
  document.getElementById('tasks').appendChild(taskElement);
});

// Add event delegation for dynamically added buttons
document.getElementById('tasks').addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('edit')) {
    // Handle edit button click
    const textInput = target.closest('.task').querySelector('.text');
    textInput.readOnly = !textInput.readOnly;
  } else if (target.classList.contains('delete')) {
    // Handle delete button click
    const taskElement = target.closest('.task');
    taskElement.parentNode.removeChild(taskElement);
  }
});
