const fiftyPercent = document.getElementsByClassName('heading-2');

// Intersection Observer
const options = {
  root: null,
  rootMargin: '5%',
  threshold: 0.1,
};

// const description = document.querySelector('.description');
// console.log(description);

const callback = (entries, observer) => {
  const visibility = entries[0].intersectionRatio;
  // if (visibility >= 0.1) {
  //   fiftyPercent[1].style.transform = 'translateX(20vw)';
  //   fiftyPercent[2].style.transform = 'translateX(-20vw)';

  //   fiftyPercent[1].innerHTML = '100%';
  //   fiftyPercent[2].innerHTML = '';
  // } else {
  //   fiftyPercent[1].style.transform = 'translateX(0)';
  //   fiftyPercent[2].style.transform = 'translateX(0)';
  //   fiftyPercent[1].innerHTML = '50%';
  //   fiftyPercent[2].innerHTML = '50%';
  // }
};

const observer = new IntersectionObserver(callback, options);
const target = document.getElementById('target');
observer.observe(target);
