const targetList = document.getElementById('target-list');
const fiftyLeft = document.getElementById('fifty-left');
const fiftyRight = document.getElementById('fifty-right');
const hundred = document.getElementById('hundred');
const jumpingLogo = document.getElementById('jumping-logo');
const albums = document.querySelectorAll('.album');

// Intersection Observer
const options = {
  root: null,
  rootMargin: '-100% 0px 0px 0px',
  threshold: 0,
};

// const description = document.querySelector('.description');
// console.log(description);

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.boundingClientRect.y < 0) {
      // fiftyLeft.classList.toggle('slide-default');
      // fiftyRight.classList.toggle('slide-default');
      fiftyLeft.classList.toggle('slide-right');
      fiftyRight.classList.toggle('slide-left');
      hundred.classList.toggle('slide-down');
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(targetList);

// Another intersection observer
const artOptions = {
  root: null,
  rootMargin: '0px 0px -60% 0px',
  threshold: 0,
};

const coverStack = [];

const classToggler = (id) => {
  // const toggleCurrent = () => {
  //   const selectedElement = document.getElementById(id);
  //   if (selectedElement) {
  //     selectedElement.classList.toggle('animation-fadeout');
  //     selectedElement.classList.toggle('animation-fadein');
  //   }
  // };

  const togglePrevious = () => {
    const selectedElement = document.getElementById(
      coverStack[coverStack.length - 1]
    );

    if (selectedElement) {
      console.log('toggled');
      selectedElement.classList.toggle('animation-fadeout');
      selectedElement.classList.toggle('animation-fadein');
    } else {
      jumpingLogo.classList.toggle('animation-fadeout');
      jumpingLogo.classList.toggle('animation-fadein');
    }
  };

  if (coverStack[coverStack.length - 1] !== id) {
    togglePrevious();
    coverStack.push(id);
    togglePrevious();
  } else {
    togglePrevious();
    coverStack.pop();
    togglePrevious();
  }
};

const artCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (
      entry.boundingClientRect.y <= window.scrollY &&
      entry.boundingClientRect.y > 0
    ) {
      classToggler(entry.target.children[0].id);
    }
  });
};

const artObserver = new IntersectionObserver(artCallback, artOptions);
albums.forEach((cover) => artObserver.observe(cover));
// for (const cover of albumCovers) {
//   artObserver.observe(cover)
// }
