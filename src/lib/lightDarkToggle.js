const lightDarkToggle = (theme) => {
  if (!theme) {
    document.documentElement.className = 'dark';
  } else {
    document.documentElement.className = 'light';
  }
};

export default lightDarkToggle;