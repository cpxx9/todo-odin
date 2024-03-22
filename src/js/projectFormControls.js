'use strict';
const projectFormWrapper = document.querySelector('#projectFormWrapper');
const projectForm = document.querySelector('#projectForm');
const projectTitle = document.querySelector('#projectTitle');
const projectDescription = document.querySelector('#projectDescription');
const projectColor = document.querySelector('#projectColor');
const hideBtn = document.querySelector('#projectHideBtn');
const submitBtn = document.querySelector('#projectFormSubmitBtn');

submitBtn.addEventListener('click', submitProjectForm);
hideBtn.addEventListener('click', hideProjectForm);

function projectFormControls() {
  projectColor.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(projectColor.value);
  projectFormWrapper.classList.add('form-open');
}

function hideProjectForm(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('test');

  projectFormWrapper.classList.remove('form-open');
  projectTitle.value = '';
  projectDescription.value = '';
}

function submitProjectForm(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('test');

  hideProjectForm(e);
}

export { projectFormControls };
