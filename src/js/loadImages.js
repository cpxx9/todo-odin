import Bell from '../img/header/bell-ring-outline.svg';
import Search from '../img/header/search.svg';
import UserLogo from '../img/header/user-logo.svg';
import Home from '../img/sidebar/home.svg';
import MainLogo from '../img/sidebar/main-logo.svg';
import Privacy from '../img/sidebar/privacy.svg';
import Projects from '../img/sidebar/projects.svg';
import Settings from '../img/sidebar/settings.svg';
import Support from '../img/sidebar/support.svg';
import Github from '../img/icon-logo-github.png';
import Instagram from '../img/icon-logo-instagram.png';
import LinkedIn from '../img/icon-logo-linkedin.png';

function loadImages() {
  const bell = document.querySelector('#bell');
  bell.src = Bell;

  const search = document.querySelector('#search');
  search.src = Search;

  const userLogo = document.querySelector('#userLogo');
  userLogo.src = UserLogo;

  const userLogo2 = document.querySelector('#userLogo2');
  userLogo2.src = UserLogo;

  const home = document.querySelector('#home');
  home.src = Home;

  const mainLogo = document.querySelector('#mainLogo');
  mainLogo.src = MainLogo;

  const privacy = document.querySelector('#privacy');
  privacy.src = Privacy;

  const projects = document.querySelector('#projects');
  projects.src = Projects;

  const settings = document.querySelector('#settings');
  settings.src = Settings;

  const github = document.querySelector('#github');
  github.src = Github;

  const instagram = document.querySelector('#instagram');
  instagram.src = Instagram;

  const linkedIn = document.querySelector('#linkedIn');
  linkedIn.src = LinkedIn;
}

export { loadImages };
