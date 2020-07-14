const is = document.getElementById('is');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 560) {
    is.style.position = 'fixed';
    is.style.left = '47.6%';
    is.style.top = '20%';
  }
  // 560
});

/*
const logo = document.getElementById('logo');
let start;

const step = (timestamp) => {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  // logo.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';
  logo.style.transform = 'scale(.3)';
  logo.style.color = '#8c160b';
  logo.style.top = '50rem';
  logo.style.left = '50rem';

  if (elapsed < 2000) {
    // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    window.requestAnimationFrame(step);
    // logo.classList.add('after');
  }
});
*/
