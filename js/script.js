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
const playButton = document.querySelector('.play-button');

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

    // Section is a string: either an album name (e.g.'two-years') or 'top'
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

    // If an album is in view
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
// Player
//
const player = document.querySelector('.player');

let buttonIsActive = false;

const playerToggler = (buttonStatus, element) => {
  if (buttonStatus) {
    element.classList.remove('hidden-player');
  } else {
    element.classList.add('hidden-player');
  }
  playButton.classList.toggle('play-button--play');
  playButton.classList.toggle('play-button--stop');
};

// const button = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
  buttonIsActive = !buttonIsActive;

  playerToggler(buttonIsActive, player);
});

// click album cover --> player for this album pops up
// click another cover --> current player leaves, another pops up
// click same cover --> player leaves
// play button toggles player

const album = document.querySelectorAll('.album');

let activePlayerName = 'the-debutantes';

album.forEach((a) => {
  a.addEventListener('click', () => {
    const clickedAlbumName = a.id.replace('album-', '');
    const currentAlbumPlayer = document.getElementById(
      `player-${clickedAlbumName}`
    );

    // if (clickedAlbumName !== activePlayerName && !buttonIsActive) {
    //   const pl = document.getElementById(`player-${activePlayerName}`);
    //   pl.style.transition = 'transform 0s';
    //   pl.classList.add('hidden-iframe');
    //   currentAlbumPlayer.classList.remove('hidden-iframe');

    //   pl.style.transition = 'transform 0.2s';
    //   activePlayerName = clickedAlbumName;
    // }

    // // donut delete
    // else
    if (clickedAlbumName !== activePlayerName) {
      document
        .getElementById(`player-${activePlayerName}`)
        .classList.add('hidden-iframe');

      setTimeout(() => {
        currentAlbumPlayer.classList.remove('hidden-iframe');
      }, 200);

      activePlayerName = clickedAlbumName;
    }

    if (!buttonIsActive) {
      buttonIsActive = !buttonIsActive;

      playerToggler(buttonIsActive, player);
    }
  });
});
