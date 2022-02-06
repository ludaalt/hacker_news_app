export const animationFunction = (): void => {
  if (window.scrollY > 0) {
    document.querySelector('h1')?.classList.add('toleft');
    document.querySelector('h1')?.classList.remove('tocenter');

    document.querySelector('.update-news-button')?.classList.add('toright');
    document.querySelector('.update-news-button')?.classList.remove('tocenter');

    document.querySelector('.back-button')?.classList.add('toleft');
    document.querySelector('.back-button')?.classList.remove('tocenter');

    document.querySelector('.update-comments-button')?.classList.add('toright');
    document.querySelector('.update-comments-button')?.classList.remove('tocenter');
  } else if (window.scrollY < 10) {
    document.querySelector('h1')?.classList.add('tocenter');
    document.querySelector('h1')?.classList.remove('toleft');

    document.querySelector('.update-news-button')?.classList.add('tocenter');
    document.querySelector('.update-news-button')?.classList.remove('toright');

    document.querySelector('.back-button')?.classList.add('tocenter');
    document.querySelector('.back-button')?.classList.remove('toleft');

    document.querySelector('.update-comments-button')?.classList.add('tocenter');
    document.querySelector('.update-comments-button')?.classList.remove('toright');
  }
};
