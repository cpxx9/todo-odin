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
  const target = e.target.closest('#editBtn');

  if (target) {
    editTodo(todos[e.target.dataset.defaultIndex]);
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

createTodo('Test', 1, '3/17/2022', 1, 'Test todo 1');
createTodo('Default Test', 0, '3/18/2022', 2, 'Test todo 2');
createTodo('Skip', 2, '3/20/2022', 4, 'Test todo 4');

loadImages();
loadCards(projects[0]);
loadProjects(projects);
