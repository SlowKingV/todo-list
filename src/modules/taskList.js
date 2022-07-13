import Task from './task.js';

export default class {
  constructor(container, list = []) {
    this.container = container;
    this.list = list;
  }

  add(value) {
    this.list.push(new Task(value, this.list.length));
  }

  remove(index) {
    this.list.splice(index, 1);
    this.#updateTasksIndex();
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
    this.list.forEach((item, index) => { item.index = index; });
  }
}