import Task from './task.js';

export default class {
  constructor(container, list = []) {
    this.container = container;
    this.list = list;
  }

  regenerateValues(datalist) {
    const takslist = [];
    datalist.forEach((entry) => {
      takslist.push(new Task(
        entry.value,
        entry.index,
        entry.completed,
      ));
    });

    this.list = takslist;
  }

  exportListValues() {
    const datalist = [];
    this.list.forEach((task) => {
      datalist.push({
        value: task.value,
        index: task.index,
        completed: task.completed,
      });
    });

    return datalist;
  }

  add(value) {
    const task = new Task(value, this.list.length);
    this.list.push(task);
    return task;
  }

  remove(index) {
    this.list.splice(index, 1);
    this.#updateTasksIndex();
  }

  edit(index, value) {
    this.list[index].updateValue(value);
  }

  moveTaskToPosition(taskIndex, newIndex) {
    const task = this.list.splice(taskIndex, 1)[0];
    this.list.splice(newIndex, 0, task);
    this.#updateTasksIndex();
  }

  updateListHTML() {
    const items = [];
    const rule = document.createElement('li');
    rule.appendChild(document.createElement('hr'));

    this.list.forEach((task) => items.push(task.element, rule.cloneNode(true)));
    this.container.replaceChildren(...items);
  }

  #updateTasksIndex() {
    this.list.forEach((task, index) => {
      task.index = index;
      task.updateIndex();
    });
  }
}