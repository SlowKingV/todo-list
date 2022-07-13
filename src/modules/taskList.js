import Task from './task';

export default class {
  constructor(list = []) {
    this.list = list;
  }

  add(value) {
    this.list.push(new Task(value, this.list.length));
  }

  remove(index) {
    this.list.splice(index, 1);
    this.refreshItemsIndex();
  }

  refreshItemsIndex() {
    this.list.forEach( (item, index) => item.index = index );
  }

  insertItems(element) {
    const items = [];
    const rule = document.createElement('li');
    rule.appendChild(document.createElement('hr'));
    
    this.list.forEach( (task) => items.push(task.element, rule.cloneNode(true)) );

    element.replaceChildren(...items);
  }
}