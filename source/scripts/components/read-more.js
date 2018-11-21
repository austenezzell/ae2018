export default function() {
  const mainContainer = document.querySelector('.main-container');
  const more = document.querySelectorAll('.more');
  const theMore = document.querySelector('.the-more');
  const close = document.querySelector('.close');
  let moreOpen = false;

  more[0].addEventListener('click', e => {
    e.preventDefault();
    if (moreOpen == false){
      mainContainer.classList.add('active');
      more[0].textContent = 'Less';
      moreOpen = true;
    } else {
      mainContainer.classList.remove('active');
      more[0].textContent = 'More';
      moreOpen = false;
    }
  });
}
