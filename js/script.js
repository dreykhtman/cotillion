const playButton = document.querySelector('.play-button');

//
// Observer for the 50% element slide animation
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
    if (entry.boundingClientRect.y < 0 && !entry.isIntersecting) {
      fiftyLeft.classList.add('slide-right');
      fiftyRight.classList.add('slide-left');
      hundred.classList.add('slide-down');
    } else {
      fiftyLeft.classList.remove('slide-right');
      fiftyRight.classList.remove('slide-left');
      hundred.classList.remove('slide-down');
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(targetList);

//
// Navbar & jumping logo observer
//

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
        // playButton.classList.remove('show-button');

        jumpingLogo.classList.add('animation-fadein');
        jumpingLogo.classList.remove('animation-fadeout');
      } else {
        playButton.classList.add('show-button');

        jumpingLogo.classList.add('animation-fadeout');
        jumpingLogo.classList.remove('animation-fadein');
      }
    }
  });
};

const navbarObserver = new IntersectionObserver(navbarCallback, navbarOptions);

sections.forEach((section) => navbarObserver.observe(section));
navbarObserver.observe(ourAlbums);

//
// Play button
//

// const button = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
  playButton.classList.toggle('play-button--play');
  playButton.classList.toggle('play-button--stop');
});

//
// iframe
//
