let counter = 1;
const totalSlides = 6;

const autoBtns = document.querySelectorAll('.auto-btn1, .auto-btn2, .auto-btn3, .auto-btn4, .auto-btn5, .auto-btn6');
const manualBtns = document.querySelectorAll('.manual-btn');

function updateSlideVisibility() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.classList.remove('slide-visible');
    if (index === (counter - 1)) {
      slide.classList.add('slide-visible');
    }
  });
  autoBtns.forEach((btn, index) => {
    btn.classList.remove('active');
    if (index === (counter - 1)) {
      btn.classList.add('active');
    }
  });
}

function setSlide(index) {
  counter = index;
  document.getElementById('radio' + counter).checked = true;
  updateSlideVisibility();
}

manualBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => setSlide(index + 1));
});

setInterval(function() {
  counter++;
  if (counter > totalSlides) {
    counter = 1;
  }
  setSlide(counter);
}, 5000);

// Initial visibility update
updateSlideVisibility();
