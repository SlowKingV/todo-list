// Save into LocalStorage
const updateLocalStorage = (tasklist) => {
  localStorage.datalist = JSON.stringify(tasklist.exportListValues());
};

// Set Task input handlers
const setTaskHandlers = (task, tasklist) => {
  // Set Delete button handler
  task.element.DELETE_BUTTON.addEventListener('click', () => {
    tasklist.remove(task.index);
    tasklist.updateListHTML();
    updateLocalStorage(tasklist);
  });

  // Set Text input handler
  task.element.TEXT_INPUT.addEventListener('change', () => {
    tasklist.edit(task.index, task.element.TEXT_INPUT.value);
    tasklist.updateListHTML();
    updateLocalStorage(tasklist);
  });

  // Set Checkbox handler
  task.element.CHECKBOX.addEventListener('change', () => {
    tasklist.setStatus(task.index, task.element.CHECKBOX.checked);
    updateLocalStorage(tasklist);
  });
};

// Set Handler for 'Add' text input
export const tasklistAdd = (tasklist, value) => {
  const task = tasklist.add(value);

  setTaskHandlers(task, tasklist);

  tasklist.updateListHTML();
  updateLocalStorage(tasklist);
};

// Set Handler for 'Clear All Completed' button
export const clearAll = (tasklist) => {
  tasklist.clearAllCompleted();
  tasklist.updateListHTML();
  updateLocalStorage(tasklist);
};

export const loadData = (tasklist) => {
  if (localStorage.datalist && localStorage.datalist.length > 0) {
    tasklist.regenerateValues(JSON.parse(localStorage.datalist));
  } else updateLocalStorage(tasklist);

  tasklist.updateListHTML();

  tasklist.list.forEach((task) => {
    setTaskHandlers(task, tasklist);
  });
};
