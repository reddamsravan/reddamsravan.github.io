(function() {
  const THEME_OPTIONS = {
    dark: 'dark',
    light: 'light'
  };
  const body = document.body;
  const checkbox = document.getElementById("theme-switch-checkbox");
  const theme = readTheme();

  checkbox.checked = theme !== THEME_OPTIONS.dark

  if (theme) {
    setDarkTheme(theme === THEME_OPTIONS.dark);
  } else {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkTheme(prefersDarkTheme)
  }

  checkbox.addEventListener('change', (event) => {
    const checked = event.target.checked;
    setDarkTheme(!checked)
  });

  function setDarkTheme(enable) {
    if (enable) {
      body.classList.remove(THEME_OPTIONS.light)
      body.classList.add(THEME_OPTIONS.dark)
      storeTheme(THEME_OPTIONS.dark)
    } else {
      body.classList.remove(THEME_OPTIONS.dark)
      body.classList.add(THEME_OPTIONS.light)
      storeTheme(THEME_OPTIONS.light)
    }
  }

  function storeTheme(theme) {
    localStorage.setItem('theme', theme)
  }

  function readTheme() {
    return localStorage.getItem('theme')
  }
})();

