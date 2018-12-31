export default function() {

  var project = document.querySelectorAll('.project');
  let projectSlides = [];
  let currentSlideCount = [];
  let currentSlide;

  for (var i = 0; i < project.length; i++) {
    projectSlides.push(project[i].querySelectorAll('.secondary-asset'));
    currentSlideCount.push(0);
    let currentSlide = i;
    project[i].addEventListener('click', e => {

      if (e.target.tagName.toLowerCase() !== 'a') {
        e.preventDefault();
        // if (e.target.parentNode.parentNode.nextElementSibling !== null) {
        //   if (e.target.parentNode.parentNode.nextElementSibling.querySelector('.accordionItem').classList.contains('close')) {
        //     e.target.parentNode.parentNode.nextElementSibling.querySelector('.accordionItem').className = 'accordionItem open';
        //   }
        // }
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
      }
    });
  }

}
