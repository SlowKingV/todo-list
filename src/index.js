// Node Modules
import '@fortawesome/fontawesome-free/js/all.js';

// Assets
import './style.css';

// Modules
import TaskList from './modules/taskList.js';
import { tasklistAdd, clearAll, loadData } from './modules/DOMFunctions.js';

// Declare constants for DOM Elements
const addTaskForm = document.getElementById('add-form');
const tasklist = new TaskList(document.getElementById('list'));
const textInput = document.getElementById('text-input');
const clearButton = document.getElementById('clear-btn');

// Set Handler for 'Add' text input
addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  tasklistAdd(tasklist, textInput.value);
  textInput.value = '';
});

// Set Handler for 'Clear All Completed' button
clearButton.addEventListener('click', () => {
  clearAll(tasklist);
});

// On page load populate task list
window.onload = () => {
  loadData(tasklist);
};
