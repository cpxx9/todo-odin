'use strict';

class Project {
  constructor() {
    this.title = arguments[0];
    this.todos = [];
    if (arguments.length > 1) {
      this.description = arguments[1];
    }
    if (arguments.length > 2) {
      this.color = arguments[2];
    }
    if (arguments.length > 3) {
      this.todos = Array.from(arguments).slice(3);
    }
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }
}

export { Project };
