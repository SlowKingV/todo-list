/**
 * @jest-environment jsdom
 */
import TaskList from '../modules/taskList.js';
import { tasklistAdd, clearAll} from '../modules/DOMFunctions';

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
  test('clear all complete button', () =>{
    tasklistAdd(tasklist, 'hello');
    tasklistAdd(tasklist, 'world');
    tasklistAdd(tasklist, 'task');

    tasklist.setStatus(1, true);
    tasklist.setStatus(3, true);
    clearAll(tasklist);
    tasklist.updateListHTML();

    expect(list.querySelectorAll('.item').length).toBe(1);
  });
});