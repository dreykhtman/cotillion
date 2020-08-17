const targetList = document.getElementById('target-list');
const fiftyLeft = document.getElementById('fifty-left');
const fiftyRight = document.getElementById('fifty-right');
const hundred = document.getElementById('hundred');
const jumpingLogo = document.getElementById('jumping-logo');
const albums = document.querySelectorAll('.album');
const ourAlbums = document.getElementById('our-albums');

// Observer for the 50% element slide animation
const options = {
  root: null,
  rootMargin: '-100% 0px 0px 0px',
  threshold: 0,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.boundingClientRect.y < 0) {
      fiftyLeft.classList.toggle('slide-right');
      fiftyRight.classList.toggle('slide-left');
      hundred.classList.toggle('slide-down');
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(targetList);

// Observer for the jumping logo
const artOptions = {
  root: null,
  rootMargin: '0px 0px -57% 0px',
  threshold: 0,
};

const coverStack = [];

const classToggler = (id) => {
  const togglePrevious = () => {
    const selectedElement = document.getElementById(
      coverStack[coverStack.length - 1]
    );

    if (selectedElement) {
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
      entry.boundingClientRect.y > 0 &&
      entry.target.id === 'our-albums'
    ) {
      ourAlbums.classList.toggle('change-color');
    } else if (
      entry.boundingClientRect.y <= window.scrollY &&
      entry.boundingClientRect.y > 0
    ) {
      classToggler(entry.target.children[0].id);
    }
  });
};

const artObserver = new IntersectionObserver(artCallback, artOptions);
albums.forEach((cover) => artObserver.observe(cover));
artObserver.observe(ourAlbums);

// Navbar observer
// const navSelected = document.getElementsByClassName('nav-selected');
const sections = document.querySelectorAll('.section');
console.log(sections);

const navbarOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0,
};

const navbarCallback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry.target.id);
    const element = document.getElementById(`active-${entry.target.id}`);
    if (entry.isIntersecting) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
};

const navbarObserver = new IntersectionObserver(navbarCallback, navbarOptions);
sections.forEach((section) => navbarObserver.observe(section));
