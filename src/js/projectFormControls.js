'use strict';
import { createProject } from './appController';
import { capitalizeFirstLetter } from './formControls';

const projectFormWrapper = document.querySelector('#projectFormWrapper');
const projectForm = document.querySelector('#projectForm');
const projectTitle = document.querySelector('#projectTitleInput');
const projectDescription = document.querySelector('#projectDescription');
const projectColor = document.querySelector('#projectColor');
const hideBtn = document.querySelector('#projectHideBtn');
const submitBtn = document.querySelector('#projectFormSubmitBtn');

submitBtn.addEventListener('click', submitProjectForm);
hideBtn.addEventListener('click', hideProjectForm);

function projectFormControls() {
  projectForm.reset();
  projectColor.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  projectFormWrapper.classList.add('form-open');
}

function hideProjectForm(e) {
  e.preventDefault();
  e.stopPropagation();

  projectFormWrapper.classList.remove('form-open');
}

function submitProjectForm(e) {
  e.preventDefault();
  e.stopPropagation();

  let projectTitleValidate = false;
  let projectDescValidate = false;

  if (projectTitle.value) {
    projectTitleValidate = true;
  }
  if (projectDescription.value) {
    projectDescValidate = true;
  }

  if (!projectDescValidate || !projectTitleValidate) {
    alert('Must have a title and description!');
    return;
  }
  projectTitleValidate = false;
  projectDescValidate = false;

  createProject(
    capitalizeFirstLetter(projectTitle.value),
    capitalizeFirstLetter(projectDescription.value),
    projectColor.value
  );
  hideProjectForm(e);
}

export { projectFormControls };
