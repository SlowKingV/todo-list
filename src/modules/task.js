export default class {
  constructor(value, index, completed = false) {
    this.value = value;
    this.index = index;
    this.completed = completed;
    this.element = this.#createElement();

    // Element constants
    Object.assign(this.element, {
      CHECKBOX: this.element.children[0],
      TEXT_INPUT: this.element.children[1],
      DELETE_BUTTON: this.element.children[2],
      MOVE_BUTTON: this.element.children[3],
    });
  }

  updateIndex() {
    this.element.setAttribute('data-index', this.index.toString());
  }

  updateValue(value) {
    this.value = value;
    this.element.TEXT_INPUT.value = value;
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
    element.appendChild(document.createElement('button'));
    element.children[3].appendChild(document.createElement('i'));

    // Set attributes for checkbox
    element.children[0].setAttribute('class', 'task-check');
    element.children[0].setAttribute('type', 'checkbox');
    if (this.completed) element.children[0].checked = true;

    // Set attributes for text input
    element.children[1].setAttribute('class', 'description');
    element.children[1].setAttribute('type', 'text');
    element.children[1].setAttribute('value', this.value);

    // Set attributes for delete button and children
    element.children[2].setAttribute('class', 'icon-btn delete');
    element.children[2].setAttribute('type', 'button');
    element.children[2].firstChild.setAttribute('class', 'icon fa-solid fa-trash-can fa-fw');

    // Set attributes for move button and children
    element.children[3].setAttribute('class', 'icon-btn move');
    element.children[3].setAttribute('type', 'button');
    element.children[3].firstChild.setAttribute('class', 'icon fa-solid fa-ellipsis-vertical fa-fw');

    return element;
  }
}
