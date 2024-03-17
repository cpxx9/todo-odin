'use strict';
class Project {
  constructor() {
    this.title = arguments[0];
    this.index = 0;
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
    this.todos[this.todos.length - 1].project = this.index;
    this.todos[this.todos.length - 1].currentProjectIndex =
      this.todos.length - 1;
  }

  removeTodo(index) {
    this.todos[index].project = 0;
    delete this.todos[index].currentProjectIndex;
    this.todos.splice(index, 1);
    this.todos.forEach((todo) => {
      if (todo.currentProjectIndex >= index) {
        todo.currentProjectIndex--;
      }
    });
  }
}

export { Project };
