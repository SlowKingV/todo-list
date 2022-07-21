/**
 * @jest-environment jsdom
 */
import task from '../modules/task.js';
import TaskList from '../modules/taskList.js';

describe('add and remove', () => {
    test('add of items', () => {
        document.body.innerHTML =
        '<div>' +
        '  <ul id="list"></li>' +
        '</div>'; 
        const list = document.getElementById('list');
        const tasklist = new TaskList(list);
        tasklist.add('hello');
        tasklist.updateListHTML();
        console.log(Array.from(list.children));
        expect(list.children.length).toBe(1);
    })
})