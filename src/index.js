// Node Modules
import '@fortawesome/fontawesome-free/js/all.js';

// Assets
import './style.css';

// Modules
import TaskList from './modules/taskList.js';

// Declare constants for DOM Elements
const addTaskForm = document.getElementById('add-form');
const tasklist = new TaskList(document.getElementById('list'));
const textInput = document.getElementById('text-input');
const clearButton = document.getElementById('clear-btn');

// Save into LocalStorage
const updateLocalStorage = () => {
  localStorage.datalist = JSON.stringify(tasklist.exportListValues());
};

// Set Task input handlers
const setTaskHandlers = (task) => {
  // Set Delete button handler
  task.element.DELETE_BUTTON.addEventListener('click', () => {
    tasklist.remove(task.index);
    tasklist.updateListHTML();
    updateLocalStorage();
  });

  // Set Text input handler
  task.element.TEXT_INPUT.addEventListener('change', () => {
    tasklist.edit(task.index, task.element.TEXT_INPUT.value);
    tasklist.updateListHTML();
    updateLocalStorage();
  });

  // Set Checkbox handler
  task.element.CHECKBOX.addEventListener('change', () => {
    tasklist.setStatus(task.index, task.element.CHECKBOX.checked);
    updateLocalStorage();
  });
};

// Set Handler for 'Add' text input
addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = tasklist.add(textInput.value);

  setTaskHandlers(task);

  tasklist.updateListHTML();
  updateLocalStorage();
  textInput.value = '';
});

// Set Handler for 'Clear All Completed' button
clearButton.addEventListener('click', () => {
  tasklist.clearAllCompleted();
  tasklist.updateListHTML();
  updateLocalStorage();
});

// On page load populate task list
window.onload = () => {
  if (localStorage.datalist && localStorage.datalist.length > 0) {
    tasklist.regenerateValues(JSON.parse(localStorage.datalist));
  } else updateLocalStorage();

  tasklist.updateListHTML();

  tasklist.list.forEach((task) => {
    setTaskHandlers(task);
  });
};
