const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTaskElement(taskText) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('completed-checkbox');
  checkbox.classList.add('form-check');
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(taskText));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.classList.add('delete-button');
  li.appendChild(deleteButton);

  return li;
}

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains('completed-checkbox')) {
    event.target.parentElement.classList.toggle('completed');
  }
});