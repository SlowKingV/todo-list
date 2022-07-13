export default class {
  constructor(value, index, completed = false) {
    this.value = value;
    this.index = index;
    this.completed = completed;
    this.element = this.#createElement();
  }

  updateIndex() {
    this.element.setAttribute('data-index', this.index.toString());
  }

  #createElement() {
    // Create list element
    const element = document.createElement('li');
    element.setAttribute('class', 'item');
    element.setAttribute('data-index', this.index.toString());
    // Create children
    element.appendChild(document.createElement('input'));
    element.appendChild(document.createElement('input'));
    element.appendChild(document.createElement('button'));
    element.children[2].appendChild(document.createElement('i'));

    // Set attributes for checkbox
    element.children[0].setAttribute('class', 'task-check');
    element.children[0].setAttribute('type', 'checkbox');

    // Set attributes for text input
    element.children[1].setAttribute('class', 'description');
    element.children[1].setAttribute('type', 'text');
    element.children[1].setAttribute('value', this.value);

    // Set attributes for button and children
    element.children[2].setAttribute('class', 'icon-btn');
    element.children[2].setAttribute('type', 'button');
    element.children[2].firstChild.setAttribute('class', 'icon fa-solid fa-ellipsis-vertical fa-fw');

    return element;
  }
}
