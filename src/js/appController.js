import { Todo } from './todo';
import { Project } from './projects';
import { loadCards, loadProjects, currentLoadedProject } from './domController';
import { formControls } from './formControls';

let todos = [];
let projects = [
  new Project('All Your', 'This is the default project', '#FF0000'),
];

if (localStorage.getItem('todos') !== null) {
  let storageTodoArray = JSON.parse(localStorage.getItem('todos'));
  storageTodoArray.forEach((item) => {
    const newTodoFromStorage = new Todo(
      item.title,
      item.project,
      item.date,
      item.priority,
      item.description
    );
    newTodoFromStorage.defaultProjectIndex = item.defaultProjectIndex;
    if (Object.hasOwn(item, 'currentProjectIndex')) {
      newTodoFromStorage.currentProjectIndex = item.currentProjectIndex;
    }
    todos.push(newTodoFromStorage);
  });
  console.log(todos);
}

if (localStorage.getItem('projects') !== null) {
  projects.pop();
  let storageArray = JSON.parse(localStorage.getItem('projects'));
  storageArray.forEach((item) => {
    const newProjectFromStorage = new Project(
      item.title,
      item.description,
      item.color
    );
    newProjectFromStorage.index = item.index;
    newProjectFromStorage.todos = [];
    projects.push(newProjectFromStorage);
  });
  console.log(projects);
}

todos.forEach((elm) => {
  projects[elm.project].todos.push(elm);
  if (elm.project !== 0) {
    projects[0].todos.push(elm);
  }
});

function createTodo() {
  const newTodo = new Todo(...arguments);
  todos.push(newTodo);
  newTodo.defaultProjectIndex = projects[0].todos.length;
  projects[0].todos.push(newTodo);
  if (newTodo.project <= projects.length - 1) {
    if (newTodo.project) {
      newTodo.currentProjectIndex = projects[newTodo.project].todos.length;
      projects[newTodo.project].todos.push(newTodo);
    }
  }
  loadCards(projects[currentLoadedProject]);
  saveToStorage();
  return newTodo;
}

function moveTodo(todo, project) {
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

function removeTodo(todo) {
  todos.splice(todo.defaultProjectIndex, 1);
  todos.forEach((newTodo) => {
    if (newTodo.defaultProjectIndex >= todo.defaultProjectIndex) {
      newTodo.defaultProjectIndex--;
    }
  });
  projects[0].todos.splice(todo.defaultProjectIndex, 1);

  if (todo.project > 0) {
    projects[todo.project].todos.splice(todo.currentProjectIndex, 1);
    projects[todo.project].todos.forEach((newTodo) => {
      if (newTodo.currentProjectIndex >= todo.currentProjectIndex) {
        newTodo.currentProjectIndex--;
      }
    });
  }
  loadCards(projects[currentLoadedProject]);
  saveToStorage();
}

function createProject() {
  const newProject = new Project(...arguments);
  projects.push(newProject);
  newProject.index = projects.length - 1;
  loadProjects(projects);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(projects[0].todos));
  localStorage.setItem('projects', JSON.stringify(projects));
}

export {
  createTodo,
  createProject,
  removeTodo,
  moveTodo,
  todos,
  projects,
  saveToStorage,
};
