import StarLogo from '../img/main/star-plus.svg';
import EyeLogo from '../img/main/eye-plus.svg';
import ShareLogo from '../img/main/share.svg';

const cardArea = document.querySelector('.content-left-cards');

console.log(cardArea);

function loadCards(todoArr) {
  cardArea.innerHTML = '';
  todoArr.forEach((todo) => {
    const card = document.createElement('div');
    card.classList.add('card', 'main-card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = todo.title;
    const cardPara = document.createElement('p');
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardPara);

    const cardTools = document.createElement('div');
    cardTools.classList.add('card-tools');
    const starTool = document.createElement('a');
    starTool.href = '/';
    const starToolImg = document.createElement('img');
    starToolImg.src = StarLogo;
    starTool.appendChild(starToolImg);
    const eyeTool = document.createElement('a');
    eyeTool.href = '/';
    const eyeToolImg = document.createElement('img');
    eyeToolImg.src = EyeLogo;
    eyeTool.appendChild(eyeToolImg);
    const shareTool = document.createElement('a');
    shareTool.href = '/';
    const shareToolImg = document.createElement('img');
    shareToolImg.src = ShareLogo;
    shareTool.appendChild(shareToolImg);
    cardTools.appendChild(starTool);
    cardTools.appendChild(eyeTool);
    cardTools.appendChild(shareTool);

    card.appendChild(cardContent);
    card.appendChild(cardTools);

    cardArea.appendChild(card);
  });
}

export { loadCards };
