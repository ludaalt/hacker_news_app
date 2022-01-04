export const animationFunction = () => {
  console.log(window.pageYOffset);
  if (window.scrollY > 0) {
    document.querySelector('h1')?.classList.add('toleft');
    document.querySelector('h1')?.classList.remove('tocenter');

    document.querySelector('.update-news-button')?.classList.add('toright');
    document.querySelector('.update-news-button')?.classList.remove('tocenter');
  } else if (window.scrollY < 10) {
    document.querySelector('h1')?.classList.add('tocenter');
    document.querySelector('h1')?.classList.remove('toleft');

    document.querySelector('.update-news-button')?.classList.add('tocenter');
    document.querySelector('.update-news-button')?.classList.remove('toright');
  }
};
