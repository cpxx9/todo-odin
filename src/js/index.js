'use strict';
import { Todo } from './todo';
import { Project } from './projects';

const todos = [];
const projects = [new Project('Default', 'This is the default project')];

let test = new Project('Test', 'This is a test project');
projects.push(test);

createTodo('Test', 1);

function createTodo() {
  const newTodo = new Todo(...arguments);
  todos.push(newTodo);
  projects[0].addTodo(newTodo);
  if (newTodo.project <= projects.length - 1) {
    if (newTodo.project) {
      projects[newTodo.project].todos.push(newTodo);
    }
  }
}

console.log(projects);
