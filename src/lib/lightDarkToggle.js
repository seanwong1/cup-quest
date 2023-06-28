const lightDarkToggle = (theme) => {
  if (!theme) {
    document.documentElement.className = 'light';
  } else {
    document.documentElement.className = 'dark';
  }
};

export default lightDarkToggle;