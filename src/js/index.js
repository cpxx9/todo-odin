'use strict';
import {
  createTodo,
  createProject,
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
    loadCards(projects[e.target.dataset.projectIndex].todos);
  }
});

createProject('Work', 'This is a test project', 'red');
createProject('Personal', 'This is a test project 1', 'green');

createTodo('Test', 1, '3/17/2022', 1, 'Test todo 1');
createTodo('Default Test', 0, '3/18/2022', 2, 'Test todo 2');
createTodo('Test2', 1, '3/19/2022', 3, 'Test todo 3');
createTodo('Skip', 2, '3/20/2022', 4, 'Test todo 4');
createTodo('Skip2', 2, '3/21/2022', 5, 'Test todo 5');

console.log(projects);
console.log(todos);

loadCards(todos);
loadProjects(projects);
