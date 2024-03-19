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
  const editForm = document.querySelector('#editForm');
  editFormWrapper.classList.add('form-open');

  const hideBtn = document.querySelector('#hideBtn');
  hideBtn.addEventListener('click', function () {
    editFormWrapper.classList.remove('form-open');
    setInterval(resetForm, 500);
    function resetForm() {
      editForm.reset();
    }
  });
}

export { formControls };
