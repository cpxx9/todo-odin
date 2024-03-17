'use strict';
class Todo {
  constructor(title) {
    this.title = title;
    this.project = 'default';
  }

  changeProject(projectTitle) {
    this.project = projectTitle;
  }

  get description() {
    return this.description;
  }
  set description(description) {
    this.description = description;
  }

  get dueDate() {
    return this.project;
  }
  set dueDate(dueDate) {
    this.dueDate = dueDate;
  }

  get priority() {
    return this.project;
  }
  set priority(priority) {
    this.priority = priority;
  }
}

export { Todo };
