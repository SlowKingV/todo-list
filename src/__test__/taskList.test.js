/**
 * @jest-environment jsdom
 */
import TaskList from '../modules/taskList.js';
import { tasklistAdd, clearAll} from '../modules/DOMFunctions';
import task from '../modules/task.js';

describe('add and remove', () => {
  // Arrange
  document.body.innerHTML =
    '<div>' +
    '  <ul id="list"></li>' +
    '</div>';
  const list = document.getElementById('list');
  const tasklist = new TaskList(list);
  delete localStorage.datalist;

  test('add to items', () => {
    // Act
    tasklistAdd(tasklist, 'hello');

    // Assert
    expect(list.querySelectorAll('.item').length).toBe(1);
  })

  test('saved to local storage', () => {
    // Arrange
    const storage = JSON.parse(localStorage.datalist);

    // Assert
    expect(storage.length).toBe(1);
  })

  test('remove from items', () => {
    // Act
    tasklist.list[0].element.DELETE_BUTTON.click();

    // Assert
    expect(list.children.length).toBe(0);
  })

  test('removed from local storage', () => {
    // Arrange
    const storage = JSON.parse(localStorage.datalist);

    // Assert
    expect(storage.length).toBe(0);
  });

  test('edit item value', () => {
    // Arrange
    tasklistAdd(tasklist, 'value');
    const textInput = tasklist.list[0].element.TEXT_INPUT;
    textInput.value = 'Edited Value';

    // Act
    textInput.dispatchEvent( new Event('change'));

    // Assert
    expect(textInput.value).toBe('Edited Value');
  })

  test('update local storage on edit', () => {
    // Arrange
    const storage = JSON.parse(localStorage.datalist);

    // Assert
    expect(storage[0].value).toBe('Edited Value')
  })

  test('change checkbox status', () => {
    // Act
    tasklist.list[0].element.CHECKBOX.click();

    // Assert
    expect(tasklist.list[0].element.CHECKBOX.checked).toBe(true);
  })

  test('update local storage on check', () => {
    // Arrange
    const storage = JSON.parse(localStorage.datalist);

    // Assert
    expect(storage[0].completed).toBe(true);
  })

  test('clear all complete button', () =>{
    // Arrange
    tasklist.list = [];
    tasklistAdd(tasklist, 'hello');
    tasklistAdd(tasklist, 'world');
    tasklistAdd(tasklist, 'task');
    tasklist.setStatus(1, true);
    tasklist.setStatus(3, true);

    // Act
    clearAll(tasklist);
    tasklist.updateListHTML();

    // Assert
    expect(list.querySelectorAll('.item').length).toBe(1);
  });
});