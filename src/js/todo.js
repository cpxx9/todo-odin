'use strict';
class Todo {
  constructor() {
    this.title = arguments[0];
    this.project = 'default';
    if (arguments.length > 1) {
      this.description = arguments[1];
    }
    if (arguments.length > 2) {
      this.dueDate = arguments[2];
    }
    if (arguments.length > 3) {
      this.priority = arguments[3];
    }
    if (arguments.length > 4) {
      this.project = arguments[4];
    }
  }
}

export { Todo };
