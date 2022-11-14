function init() {
  setRadius('.btn');
};

function setRadius(className) {
  const btnHeight = document.querySelectorAll(className);
  btnHeight.forEach(e => {
    e.style.borderRadius = `${e.offsetHeight/2}px 0`;
  })
}

// init();