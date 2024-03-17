'use strict';
import { Todo } from './todo';
import { Project } from './projects';

const todos = [];
function createTodo() {
  const newTodo = new Todo(arguments);
  todos.push(newTodo);
}
