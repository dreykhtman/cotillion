const targetList = document.getElementById('target-list');
const fiftyLeft = document.getElementById('fifty-left');
const fiftyRight = document.getElementById('fifty-right');
const hundred = document.getElementById('hundred');

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
