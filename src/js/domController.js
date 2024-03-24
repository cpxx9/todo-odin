import EditLogo from '../img/main/edit.svg';
import CancelLogo from '../img/main/cancel.svg';
import DeleteLogo from '../img/main/delete.svg';
import { projects } from './appController';

const cardArea = document.querySelector('.content-left-cards');
const projectArea = document.querySelector('.projects-wrapper');
let currentLoadedProject = 0;

function loadCards(project) {
  cardArea.innerHTML = '';
  currentLoadedProject = project.index;
  project.todos.forEach((todo) => {
    const card = document.createElement('div');
    card.classList.add('card', 'main-card');
    card.style.borderLeftColor = projects[todo.project].color;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = todo.title;
    const cardPara = document.createElement('div');
    if (todo.priority) {
      const priorityDOM = document.createElement('h4');
      priorityDOM.innerHTML = `<em>Priority:</em> ${todo.priority}`;
      cardPara.appendChild(priorityDOM);
    }
    if (todo.date) {
      const dueDateDOM = document.createElement('h4');
      dueDateDOM.innerHTML = `<em>Due:</em> ${todo.date}`;
      cardPara.appendChild(dueDateDOM);
    }
    if (todo.description) {
      const descDOM = document.createElement('p');
      descDOM.textContent = todo.description;
      cardPara.appendChild(descDOM);
    }

    cardContent.appendChild(cardTitle);
    if (todo.project !== 0) {
      const cardProject = document.createElement('p');
      cardProject.classList.add('card-project-title');
      cardProject.textContent = `Project: ${projects[todo.project].title}`;
      cardContent.appendChild(cardProject);
    }
    cardContent.appendChild(cardPara);

    const cardTools = document.createElement('div');
    cardTools.classList.add('card-tools');
    const editTool = document.createElement('p');
    const editToolImg = document.createElement('img');
    editToolImg.id = 'editBtn';
    editToolImg.dataset.defaultIndex = todo.defaultProjectIndex;
    if (todo.currentProjectIndex >= 0) {
      editToolImg.dataset.currentIndex = todo.currentProjectIndex;
    }
    editToolImg.src = EditLogo;
    editTool.appendChild(editToolImg);
    const cancelTool = document.createElement('p');
    const cancelToolImg = document.createElement('img');
    cancelToolImg.id = 'cancelBtn';
    cancelToolImg.dataset.defaultIndex = todo.defaultProjectIndex;
    if (todo.currentProjectIndex >= 0) {
      cancelToolImg.dataset.currentIndex = todo.currentProjectIndex;
      cancelToolImg.dataset.currentProject = todo.project;
    }
    cancelToolImg.src = CancelLogo;
    cancelTool.appendChild(cancelToolImg);
    const deleteTool = document.createElement('p');
    const deleteToolImg = document.createElement('img');
    deleteToolImg.id = 'deleteBtn';
    deleteToolImg.dataset.defaultIndex = todo.defaultProjectIndex;
    if (todo.currentProjectIndex >= 0) {
      deleteToolImg.dataset.currentIndex = todo.currentProjectIndex;
    }
    deleteToolImg.src = DeleteLogo;
    deleteTool.appendChild(deleteToolImg);
    cardTools.appendChild(editTool);
    cardTools.appendChild(cancelTool);
    cardTools.appendChild(deleteTool);

    card.appendChild(cardContent);
    card.appendChild(cardTools);

    cardArea.appendChild(card);
  });
}

function loadProjects(projectArr) {
  projectArea.innerHTML = '';
  projectArr.forEach((project) => {
    if (project.index === 0) {
      return;
    }
    const projectNav = document.createElement('p');
    projectNav.textContent = project.title;
    projectNav.dataset.projectIndex = project.index;
    projectNav.classList.add('project-nav-btn');
    projectArea.appendChild(projectNav);
  });
}

export { loadCards, loadProjects, currentLoadedProject };
