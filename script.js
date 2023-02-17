const slides = document.querySelectorAll("slider li");
const buttons = document.querySelectorAll("slider button");

let slideIndex = 1;

for (const btn of buttons) {
  btn.onclick = rotateSlider;
}

function rotateSlider(e) {
  const shift = +e.target.dataset.shift;
  const prevSlide = slides[slideIndex];

  slideIndex = (slideIndex + shift + slides.length) % slides.length;

  const nextSlide = slides[slideIndex];

  prevSlide.className = shift < 0 ? "right" : "left";
  nextSlide.style.transition = "unset";
  nextSlide.className = shift > 0 ? "right" : "left";
  setTimeout(() => {
    nextSlide.style.transition = null;
    nextSlide.className = "";
  }, 0);
}
