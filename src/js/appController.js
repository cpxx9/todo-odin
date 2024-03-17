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

function moveTodo(todo, project) {
  if (project.index === 0) {
    console.log('Already in default project!!');
    return;
  }
  projects[todo.project].todos.splice(todo.currentProjectIndex, 1);
  projects[todo.project].todos.forEach((newTodo) => {
    if (newTodo.currentProjectIndex >= todo.currentProjectIndex) {
      newTodo.currentProjectIndex--;
    }
  });
  todo.currentProjectIndex = project.todos.length;
  project.todos.push(todo);
  todo.project = project.index;
}

function createProject() {
  const newProject = new Project(...arguments);
  projects.push(newProject);
  newProject.index = projects.length - 1;
}

export { createTodo, createProject, moveTodo, todos, projects };
