import refs from './refs.js';

const { toggle, body } = refs;
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

toggle.addEventListener('change', setToggleParam);

function setToggleParam() {
  if (toggle.checked) {
    body.setAttribute('class', DARK);
    localStorage.setItem('theme', DARK);
  } else {
    body.setAttribute('class', LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}

if (localStorage.theme === DARK) {
  toggle.checked = true;
  body.setAttribute('class', DARK);
} else {
  toggle.checked = false;
  body.setAttribute('class', LIGHT);
}
