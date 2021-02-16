const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const bodyStyle = document.body.classList;

const themeSwitchBtn = document.querySelector('#theme-switch-toggle');
themeSwitchBtn.addEventListener('change', onSwitchThemeHandler);

const storageTheme = localStorage.getItem('theme');

if (storageTheme) {
  bodyStyle.add(storageTheme);
  if (bodyStyle.contains(DARK)) {
    themeSwitchBtn.setAttribute('checked', true);
  }
}

if (!bodyStyle.contains(LIGHT) && !bodyStyle.contains(DARK)) {
  bodyStyle.add(LIGHT);
}

function onSwitchThemeHandler(evt) {
  if (bodyStyle.contains(LIGHT) || bodyStyle.contains(DARK)) {
    bodyStyle.toggle(DARK);
    bodyStyle.toggle(LIGHT);
    onCheckboxControler();

    bodyStyle.contains(LIGHT)
      ? localStorage.setItem('theme', LIGHT)
      : localStorage.setItem('theme', DARK);
  }
}

function onCheckboxControler() {
  if (bodyStyle.contains(DARK)) {
    themeSwitchBtn.setAttribute('checked', true);
  }
  if (bodyStyle.contains(LIGHT)) {
    themeSwitchBtn.setAttribute('checked', false);
  }
}
onCheckboxControler();
