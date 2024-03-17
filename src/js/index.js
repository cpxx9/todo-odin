'use strict';
import { Todo } from './todo';
import { Project } from './projects';

const todos = [];
const projects = [new Project('Default', 'This is the default project')];

let test = new Project('Test', 'This is a test project');
projects.push(test);
let test1 = new Project('Test1', 'This is a test project 1');
projects.push(test1);

createTodo('Test', 1);

moveTodo(0, 2);

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

function moveTodo(todoIndex, projectIndex) {
  projects[projectIndex].todos.push(todos[todoIndex]);
}

console.log(todos);
console.log(projects);
