"use strict";
class Todo {
  constructor() {
    this.title = arguments[0];
    this.project = 0;
    this.date = "";
    this.priority = "";
    this.description = "";
    if (arguments.length > 1) {
      this.project = arguments[1];
    }
    if (arguments.length > 2) {
      this.date = arguments[2];
    }
    if (arguments.length > 3) {
      this.priority = arguments[3];
    }
    if (arguments.length > 4) {
      this.description = arguments[4];
    }
  }
}

export { Todo };
