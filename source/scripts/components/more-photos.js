export default function() {

  const featuredWork = document.querySelectorAll('.featured-work');
  const closeMoreImages = document.querySelectorAll('.close-more-images');

  let gallery;
  let totalSlides;
  let slide;
  let currentSlide = 0;
  const allSlides = document.querySelectorAll('.slide');



  // open more images overlay
  for (var i = 0; i < featuredWork.length; i++) {
    featuredWork[i].addEventListener('click', e => {
      e.preventDefault();
      // open gallery
      gallery = e.target.closest('.featured-work').nextElementSibling;
      gallery.classList.add('active');
      // count slides
      slide = gallery.querySelectorAll('.slide');
      totalSlides = gallery.querySelectorAll('.total-slides');
      countSlides();
      // turn the first slide on
      slide[0].classList.add('active');
      // slides
      slideShow();
    });
  }

  // close overlay
  for (var i = 0; i < closeMoreImages.length; i++) {
    closeMoreImages[i].addEventListener('click', e => {
      e.preventDefault();
      e.target.closest('.more-images').classList.remove('active');
      slidesOff();
      currentSlide = 0;
      for (var i = 0; i < slide.length; i++) {
        slide[i].removeEventListener("click", loopSlides);
      }
    });
  }


  // count slides
  function countSlides(){
      totalSlides[0].innerHTML = slide.length;
  }

  function slideShow(){
    for (var i = 0; i < slide.length; i++) {
      // currentSlideCount.push(0);
      currentSlide = 1;
      slide[i].addEventListener('click', e => {
        e.preventDefault();
        loopSlides();
      });
    }
  }

  function loopSlides() {
    console.log(currentSlide);
    if (currentSlide < slide.length) {
      slide[currentSlide].classList.add('active');
      currentSlide++;
    } else {
      console.log('else');
      let i = currentSlide - 1;
      // turn off slides
      function resetSlides() {
        setTimeout(function() {
          slide[i].classList.remove('active');
          i--;
          if (i >= 1) {
            resetSlides();
          }
        }, 90);
      }
      currentSlide = 0;
      resetSlides();
    }
  }



  function slidesOff() {
    for (var i = 0; i < allSlides.length; i++) {
      allSlides[i].classList.remove('active');
    }
    currentSlide = 0;
  }





  // var slide = document.querySelectorAll('.slide');

  const moreImages = document.querySelectorAll('.more-images');
  let projects = [];

  for (var i = 0; i < moreImages.length; i++) {
    projects.push(moreImages[i].querySelectorAll('.slide'));
  }




  // let currentSlideCount = [];
  // let currentSlide;

  // turn the first slide on
  // slide[0].classList.add('active');


  // set the number of slides
  // totalSlides[0].innerHTML = slide.length;



}
