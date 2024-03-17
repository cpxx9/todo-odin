import { Todo } from './todo';
import { Project } from './projects';

const todos = [];
const projects = [new Project('Default', 'This is the default project')];

function createTodo() {
  const newTodo = new Todo(...arguments);
  todos.push(newTodo);
  newTodo.defaultProjectIndex = projects[0].todos.length;
  projects[0].addTodo(newTodo);
  if (newTodo.project <= projects.length - 1) {
    if (newTodo.project) {
      newTodo.currentProjectIndex = projects[newTodo.project].todos.length;
      projects[newTodo.project].todos.push(newTodo);
    }
  }
}

function moveTodo(todo, project) {}

function createProject() {
  const newProject = new Project(...arguments);
  projects.push(newProject);
  newProject.index = projects.length - 1;
}

export { createTodo, createProject, moveTodo, todos, projects };
