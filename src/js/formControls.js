'use strict';
import {
  createTodo,
  createProject,
  editTodo,
  removeTodo,
  moveTodo,
  todos,
  projects,
} from './appController';
import { loadCards, loadProjects, currentLoadedProject } from './domController';
let currentTodo;
const editFormWrapper = document.querySelector('#editFormWrapper');
const editForm = document.querySelector('#editForm');
const pushChnageBtn = document.querySelector('#formSubmitBtn');
function formControls(todo) {
  currentTodo = todo;
  pushChnageBtn.addEventListener('click', pushTodoEdits);

  editFormWrapper.classList.add('form-open');

  loadFormOptions(todo);
  fillFormFields(editForm, todo);

  const hideBtn = document.querySelector('#hideBtn');
  hideBtn.addEventListener('click', function () {
    editFormWrapper.classList.remove('form-open');
  });
}

function pushTodoEdits(e) {
  e.preventDefault();
  e.stopPropagation();
  Array.from(editForm).forEach((element) => {
    const todoID = String(element.id).slice(4).toLowerCase();
    if (todoID === 'btn' || todoID === 'submitbtn') {
      return;
    } else if (todoID === 'project') {
      currentTodo.project = Number(element.value);
      projects[currentTodo.project].addTodo(currentTodo);
      // moveTodo(currentTodo, projects[Number(element.value)]);
    } else if (todoID === 'priority') {
      currentTodo[todoID] = Number(element.value);
    } else {
      currentTodo[todoID] = element.value;
    }
  });
  loadCards(projects[currentLoadedProject]);
  console.log(todos);
  editFormWrapper.classList.remove('form-open');
}

function loadFormOptions(todo) {
  const projectFormInput = document.querySelector('#todoProject');
  const formTitle = document.querySelector('#formTitle');
  formTitle.textContent = todo.title;

  loadProjectOptions(projectFormInput);
  projectFormInput.selectedIndex = todo.project;
}

function fillFormFields(form, todo) {
  Array.from(form).forEach((element) => {
    const todoID = String(element.id).slice(4).toLowerCase();
    if (todoID === 'btn') {
      return;
    }
    if (todo[todoID]) {
      element.value = String(todo[todoID]);
    }
  });
}

function loadProjectOptions(formSelect) {
  formSelect.innerHTML = '';
  projects.forEach((project) => {
    const projectOption = document.createElement('option');
    projectOption.value = project.index;
    if (project.index === 0) {
      projectOption.textContent = 'Main Project';
    } else {
      projectOption.textContent = project.title;
    }
    formSelect.appendChild(projectOption);
  });
}

export { formControls };
