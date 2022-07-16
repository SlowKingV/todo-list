// Node Modules
import '@fortawesome/fontawesome-free/js/all.js';

// Assets
import './style.css';

// Modules
import TaskList from './modules/taskList.js';

const addTaskForm = document.getElementById('add-form');
const tasklist = new TaskList(document.getElementById('list'));
const textInput = document.getElementById('text-input');
const updateLocalStorage = () => {
  localStorage.datalist = JSON.stringify(tasklist.exportListValues());
};

const setDeleteHandler = (task) => {
  task.element.DELETE_BUTTON.addEventListener('click', () => {
    tasklist.remove(task.index);
    tasklist.updateListHTML();
    updateLocalStorage();
  });
};

const setTextInputHandler = (task) => {
  task.element.TEXT_INPUT.addEventListener('change', () => {
    tasklist.edit(task.index, task.element.TEXT_INPUT.value);
    tasklist.updateListHTML();
    updateLocalStorage();
  });
};

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = tasklist.add(textInput.value);

  setDeleteHandler(task);
  setTextInputHandler(task);

  tasklist.updateListHTML();
  updateLocalStorage();
  textInput.value = '';
});

// On page load populate task list
window.onload = () => {
  if (localStorage.datalist && localStorage.datalist.length > 0) {
    tasklist.regenerateValues(JSON.parse(localStorage.datalist));
  } else updateLocalStorage();

  tasklist.updateListHTML();

  tasklist.list.forEach((task) => {
    setDeleteHandler(task);
    setTextInputHandler(task);
  });
};
