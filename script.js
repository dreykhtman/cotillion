//
//
// Observer for the 50% element slide animation
//
//

const targetList = document.getElementById('target-list');
const fiftyLeft = document.getElementById('fifty-left');
const fiftyRight = document.getElementById('fifty-right');
const hundred = document.getElementById('hundred');

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

//
//
// Jumping logo observer
//
//

/*
const jumpingLogo = document.getElementById('jumping-logo');
const albums = document.querySelectorAll('.album');
const ourAlbums = document.getElementById('our-albums');

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
*/

//
//
// Navbar observer
//
//

// const navSelected = document.getElementsByClassName('nav-selected');
const sections = document.querySelectorAll('.section');
const ourAlbums = document.getElementById('our-albums');

const navbarOptions = {
  root: null,
  rootMargin: '-40% 0px -60% 0px',
  threshold: 0,
};

const navbarCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target.id === 'our-albums') {
      if (entry.isIntersecting) {
        ourAlbums.classList.add('change-color');
      } else {
        ourAlbums.classList.remove('change-color');
      }
      return;
    }

    // Section is either an album name (e.g.'two-years') or 'top'
    const section = entry.target.id.replace('anchor-', '');
    // Add modifiers to section to get different elements by id
    const navbarSection = document.getElementById(`active-${section}`);
    const currentAlbumCoverLogo = document.getElementById(
      `${section}-cover-logo`
    );
    const jumpingLogo = document.getElementById('jumping-logo');

    if (entry.isIntersecting) {
      navbarSection.classList.add('active');
    } else {
      navbarSection.classList.remove('active');
    }

    if (currentAlbumCoverLogo) {
      if (entry.isIntersecting) {
        currentAlbumCoverLogo.classList.remove('animation-fadeout');
        currentAlbumCoverLogo.classList.add('animation-fadein');
      } else {
        currentAlbumCoverLogo.classList.remove('animation-fadein');
        currentAlbumCoverLogo.classList.add('animation-fadeout');
      }
    }

    if (currentAlbumCoverLogo === null) {
      if (entry.isIntersecting) {
        jumpingLogo.classList.add('animation-fadein');
        jumpingLogo.classList.remove('animation-fadeout');
      } else {
        jumpingLogo.classList.add('animation-fadeout');
        jumpingLogo.classList.remove('animation-fadein');
      }
    }

    // if (entry.isIntersecting && currentAlbumCoverLogo) {
    //   currentAlbumCoverLogo.classList.remove('animation-fadeout');
    //   currentAlbumCoverLogo.classList.add('animation-fadein');
    // } else if (currentAlbumCoverLogo && !entry.isIntersecting) {
    //   currentAlbumCoverLogo.classList.add('animation-fadeout');
    //   currentAlbumCoverLogo.classList.remove('animation-fadein');
    // }
  });
};

const navbarObserver = new IntersectionObserver(navbarCallback, navbarOptions);
sections.forEach((section) => navbarObserver.observe(section));
navbarObserver.observe(ourAlbums);
