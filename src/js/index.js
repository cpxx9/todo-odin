'use strict';
import {
  createTodo,
  createProject,
  removeTodo,
  moveTodo,
  todos,
  projects,
} from './appController';
import { loadCards, loadProjects } from './domController';
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
  const target = e.target.closest('#deleteBtn');

  if (target) {
    if (confirm('Are you sure you want to delete this card?')) {
      removeTodo(todos[e.target.dataset.todoIndex]);
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

console.log(projects);
console.log(todos);

loadCards(projects[0]);
loadProjects(projects);
