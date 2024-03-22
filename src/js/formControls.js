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
const projectFormInput = document.querySelector('#todoProject');
const todoTitleForm = document.querySelector('#todoTitle');
function formControls(todo) {
  currentTodo = todo;
  pushChnageBtn.addEventListener('click', pushTodoEdits);

  editFormWrapper.classList.add('form-open');
  loadProjectOptions(projectFormInput);

  if (todo) {
    loadFormOptions(todo);
    fillFormFields(editForm, todo);
  } else {
    editForm.reset();
    const formTitle = document.querySelector('#formTitle');
    formTitle.textContent = 'New todo';
  }

  const hideBtn = document.querySelector('#hideBtn');
  hideBtn.addEventListener('click', function () {
    editFormWrapper.classList.remove('form-open');
  });
}

function pushTodoEdits(e) {
  e.preventDefault();
  e.stopPropagation();
  if (todoTitleForm.value == '') {
    alert('Must have a Title!');
    return;
  }
  if (currentTodo) {
    Array.from(editForm).forEach((element) => {
      const todoID = String(element.id).slice(4).toLowerCase();
      if (todoID === 'btn' || todoID === 'submitbtn') {
        return;
      } else if (todoID === 'project') {
        if (currentTodo.project !== 0) {
          projects[currentTodo.project].removeTodo(
            currentTodo.currentProjectIndex
          );
        }
        currentTodo.project = Number(element.value);
        if (currentTodo.project !== 0) {
          projects[currentTodo.project].addTodo(currentTodo);
        }
        // moveTodo(currentTodo, projects[Number(element.value)]);
      } else if (todoID === 'priority') {
        currentTodo[todoID] = Number(element.value);
      } else {
        currentTodo[todoID] = element.value;
      }
    });
  } else {
    let newTodo = createTodo(capitalizeFirstLetter(todoTitleForm.value));
    if (projectFormInput.value > 0) {
      todos.pop();
      projects[0].todos.pop();
      newTodo = createTodo(
        capitalizeFirstLetter(todoTitleForm.value),
        projectFormInput.value
      );
    }

    let formInputs = [];
    let formLabels = [];
    Array.from(editForm).forEach((element) => {
      if (element.value && element.id !== 'todoTitle') {
        formInputs.push(element.value);
        formLabels.push(element.id.slice(4).toLowerCase());
      }
    });
    for (let i = 0; i < formInputs.length; i++) {
      if (formLabels[i] === 'project' || formLabels[i] === 'priority') {
        newTodo[formLabels[i]] = Number(formInputs[i]);
      } else {
        newTodo[formLabels[i]] = String(formInputs[i]);
      }
    }
    if (newTodo.project !== 0) {
      moveTodo(newTodo, projects[newTodo.project]);
    }
  }
  loadCards(projects[currentLoadedProject]);
  editFormWrapper.classList.remove('form-open');
}

function loadFormOptions(todo) {
  const formTitle = document.querySelector('#formTitle');
  formTitle.textContent = todo.title;

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { formControls, capitalizeFirstLetter };
