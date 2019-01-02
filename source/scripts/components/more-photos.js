export default function() {

  var project = document.querySelectorAll('.project');
  let projectSlides = [];
  let currentSlideCount = [];
  let currentSlide;
  let slideCount;
  let slideCountContainer;
  let totalSlides;
  let activeSlide;



  for (var i = 0; i < project.length; i++) {

    // console.log(project[i].querySelectorAll('li').length);
    slideCount = project[i].querySelectorAll('li').length;
    slideCountContainer = project[i].parentNode.querySelector('.slide-count');
    totalSlides = project[i].parentNode.querySelector('.totalSlides');
    totalSlides.textContent = slideCount;

    projectSlides.push(project[i].querySelectorAll('.secondary-asset'));
    currentSlideCount.push(0);
    let currentSlide = i;
    project[i].addEventListener('click', e => {


      if (e.target.tagName.toLowerCase() !== 'a') {
        e.preventDefault();
        if (! e.target.closest('.project').classList.contains('ae')) {
          e.target.parentNode.parentNode.nextElementSibling.querySelector('.accordionItem').className = 'accordionItem open';
        }

        if (
          currentSlideCount[currentSlide] < projectSlides[currentSlide].length
        ) {
          projectSlides[currentSlide][
            currentSlideCount[currentSlide]
          ].classList.add('active');
          currentSlideCount[currentSlide]++;
        } else {
          let i = projectSlides[currentSlide].length - 1;
          function resetSlides() {
            setTimeout(function() {
              projectSlides[currentSlide][i].classList.remove('active');
              i--;
              if (i >= 0) {
                resetSlides();
              }
            }, 90);
          }
          resetSlides();
          currentSlideCount[currentSlide] = 0;
        }

        activeSlide = e.target.closest('.project').nextElementSibling.querySelector('.activeSlide');
        activeSlide.textContent = currentSlideCount[currentSlide] + 1;
      }
    });
  }

}
