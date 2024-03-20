'use strict';
import {
  createTodo,
  createProject,
  removeTodo,
  todos,
  projects,
} from './appController';
import { loadCards, loadProjects, currentLoadedProject } from './domController';
import { formControls } from './formControls';
import { loadImages } from './loadImages';
import '../css/style.css';

document.addEventListener('click', function (e) {
  const target = e.target.closest('.project-nav-btn');

  if (target) {
    const projectDOMTitle = document.querySelector('#projectTitle');
    projectDOMTitle.textContent = `${
      projects[e.target.dataset.projectIndex].title
    } Todos`;
    loadCards(projects[e.target.dataset.projectIndex]);
  }
});

document.addEventListener('click', function (e) {
  const target = e.target.closest('#newTodoBtn');

  if (target) {
    formControls();
  }
});

document.addEventListener('click', function (e) {
  const target = e.target.closest('#editBtn');

  if (target) {
    formControls(todos[e.target.dataset.defaultIndex]);
  }
});

document.addEventListener('click', function (e) {
  const target = e.target.closest('#cancelBtn');

  if (target) {
    if (!e.target.dataset.currentIndex && e.target.dataset.currentIndex !== 0) {
      alert(
        'Cannot remove from main project!\nUse delete if you would like to fully remove it!'
      );
    } else {
      if (
        confirm('Are you sure you want to remove this todo from the project?')
      ) {
        projects[e.target.dataset.currentProject].removeTodo(
          e.target.dataset.currentIndex
        );
        loadCards(projects[currentLoadedProject]);
        console.log(todos);
        console.log(projects);
      }
    }
  }
});

document.addEventListener('click', function (e) {
  const target = e.target.closest('#deleteBtn');

  if (target) {
    if (confirm('Are you sure you want to delete this todo?')) {
      removeTodo(todos[e.target.dataset.defaultIndex]);
      console.log(todos);
      console.log(projects);
    }
  }
});

createProject('Work', 'This is a test project', 'red');
createProject('Personal', 'This is a test project 1', 'green');

createTodo('Test', 1, '2022-03-17', 1, 'Test todo 1');
createTodo('Default Test', 0, '2022-03-18', 2, 'Test todo 2');
createTodo('Skip', 2, '2022-03-19', 4, 'Test todo 4');

loadImages();
loadCards(projects[0]);
loadProjects(projects);
