// Node Modules
import '@fortawesome/fontawesome-free/js/all.js';

// Assets
import './style.css';

// Modules
import TaskList from './modules/taskList.js';

// On page load populate task list
window.onload = () => {
  const listContainer = document.getElementById('list');// <ul> element to put the <li>s
  const tasklist = new TaskList(listContainer);

  // Example task operations
  tasklist.add('Task 0');
  tasklist.add('Task 1');
  tasklist.add('Task 2');
  tasklist.add('Task 3');
  tasklist.remove(2);
  tasklist.add('Task 5');
  // Moves task on the index 2 ('Task 3') to index 1 (before 'Task 1')
  tasklist.moveTaskToPosition(2, 1);
  // Moves last task ('Task 5') to the beginning (before 'Task 0')
  tasklist.moveTaskToPosition(tasklist.list.length - 1, 0);

  tasklist.updateListHTML();
};
