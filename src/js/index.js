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
createTodo('Default Test');
createTodo('Test2');
createTodo('Skip', 2);
createTodo('Skip2', 2);

projects[1].addTodo(todos[2]);
projects[1].removeTodo(0);
