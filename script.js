function showChild(num, btn) {
    
  const children = document.querySelectorAll('.child');
  children.forEach(div => div.style.display = 'none');
  document.getElementById('child' + num).style.display = 'block';

  const allButtons = document.querySelectorAll('.button-panel button');
  allButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
window.onload = function() {
  const firstBtn = document.querySelector('.button-panel button');
  showChild(1, firstBtn);
};

const parent = document.getElementById('parentDiv');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPosition = 0;
const totalChildren = parent.children.length;
const visibleChildren = 3;
const maxPosition = totalChildren - visibleChildren;
let autoSlideInterval;

function getChildWidth() {
  const firstChild = parent.querySelector('.child-div');
  return firstChild.offsetWidth + 20; 
}

function scrollNext() {
  currentPosition++;
  if (currentPosition > maxPosition) currentPosition = 0;
  parent.scrollLeft = currentPosition * getChildWidth();
}

function scrollPrev() {
  currentPosition--;
  if (currentPosition < 0) currentPosition = maxPosition;
  parent.scrollLeft = currentPosition * getChildWidth();
}

// Auto-slide function
function startAutoSlide() {
  autoSlideInterval = setInterval(scrollNext, 1500);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

prevBtn.addEventListener('click', () => {
  scrollPrev();
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  scrollNext();
  resetAutoSlide();
});

parent.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
parent.addEventListener('mouseleave', startAutoSlide);

// Initialize
startAutoSlide();


  const images = document.querySelectorAll('.hiring-logo-img img');
  let index = 0;

  function showNextImage() {
    const current = images[index];
    current.classList.remove('active');
    current.classList.add('prev');

    index = (index + 1) % images.length; // next image index

    const next = images[index];
    next.classList.remove('prev');
    next.classList.add('active');
  }

  // initialize first image
  images[0].classList.add('active');

  // har 1 second me next image show hogi
  setInterval(showNextImage, 1000);

