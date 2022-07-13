// Node Modules
import '@fortawesome/fontawesome-free/js/all.js';

// Assets
import './style.css';

// Modules
import TaskList from './modules/taskList.js';

// On page load populate task list
window.onload = () => {
  const listContainer = document.getElementById('list');// <ul> element to put the <li>s
  const tasklist = new TaskList();
  tasklist.add('Task 0');
  tasklist.add('Task 1');
  tasklist.add('Task 2');
  tasklist.add('Task 3');
  tasklist.insertItems(listContainer);
};
