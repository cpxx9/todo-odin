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
function formControls(todo) {
  currentTodo = todo;
  const editFormWrapper = document.querySelector('#editFormWrapper');
  const editForm = document.querySelector('#editForm');
  const pushChnageBtn = document.querySelector('#formSubmitBtn');
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
  console.log(currentTodo);
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
