const targetList = document.getElementById('target-list');
const fiftyLeft = document.getElementById('fifty-left');
const fiftyRight = document.getElementById('fifty-right');
const hundred = document.getElementById('hundred');
const albumCotillion = document.getElementById('album-cotillion');
const jumpingLogo = document.getElementById('jumping-logo');

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
  rootMargin: '0px',
  threshold: 1,
};

const artCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio === 1) {
      console.log('hello!!11!!');

      jumpingLogo.classList.add(
        'cotillion-album-logo',
        'cotillion-album-logo--c'
      );
    }
  });
};

const artObserver = new IntersectionObserver(artCallback, artOptions);
artObserver.observe(albumCotillion);
