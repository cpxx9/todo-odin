'use strict';
import { Todo } from './todo';

const todos = [];
let test = new Todo('Get help');
test.project = 'test';
todos.push(test);
console.log(todos);
