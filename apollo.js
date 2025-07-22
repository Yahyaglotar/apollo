const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let currentIndex = 0;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Auto Slide
setInterval(nextSlide, 5000);

//team skill
document.querySelectorAll('.skill').forEach(skill => {
  const value = parseInt(skill.querySelector('.circle-text').textContent);
  const progress = skill.querySelector('.circle-progress');
  const offset = 314 - (314 * value / 100);
  progress.style.strokeDashoffset = offset;
});