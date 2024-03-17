'use strict';
import {
  createTodo,
  createProject,
  moveTodo,
  todos,
  projects,
} from './appController';

createProject('Test', 'This is a test project');
createProject('Test1', 'This is a test project 1');

createTodo('Test', 1);
createTodo('Test2', 1);
createTodo('Skip', 2);
createTodo('Skip2', 2);

moveTodo(todos[0], projects[2]);
moveTodo(todos[3], projects[0]);

// projects[2].removeTodo(1);
console.log(todos);
console.log(projects);
