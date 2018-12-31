export default function() {

  let i;
  let accItem = document.querySelectorAll('.accordionItem');
  let accHD = document.querySelectorAll('.accordionItemHeading');
  let bioLink = document.querySelector('.bio');
  const mainContainer = document.querySelector('.main-container');
  const bioContainer = document.querySelector('.bio-container');

  // bio more
  bioLink.addEventListener('click', toggleBio, false);
  for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
  }
  function toggleBio(e) {
      e.preventDefault();
      var itemClass = this.parentNode.parentNode.className;
      if (bioContainer.classList.contains('close')) {
          bioContainer.classList.remove('close');
          bioContainer.classList.add('open');
          mainContainer.classList.add('active-bio');
          bioLink.textContent = 'Less';
      } else {
          bioContainer.classList.remove('open');
          bioContainer.classList.add('close');
          mainContainer.classList.remove('active-bio');
          bioLink.textContent = 'More';
      }
  }

  // other mores
  function toggleItem(e) {
      e.preventDefault();
      var itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
        this.parentNode.className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
      }
  }

}
