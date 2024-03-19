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

function formControls(todo) {
  const editFormWrapper = document.querySelector('#editFormWrapper');
  editFormWrapper.classList.add('form-open');
  console.log(todo);
}

export { formControls };
