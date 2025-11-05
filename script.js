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
const indicator = document.getElementById('indicator');

let currentPosition = 0;
const totalChildren = 7;
const visibleChildren = 3;
const maxPosition = totalChildren - visibleChildren;
let autoSlideInterval;

function getChildWidth() {
    const firstChild = parent.querySelector('.child-div');
    return firstChild.offsetWidth + 20; // width + gap
}

function updateButtons() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    
    const startDiv = currentPosition + 1;
    const endDiv = Math.min(currentPosition + visibleChildren, totalChildren);
    indicator.textContent = `Showing divs ${startDiv}-${endDiv} of ${totalChildren}`;
}

function scrollNext() {
    currentPosition++;
    
    // Loop back to start when reaching the end
    if (currentPosition > maxPosition) {
        currentPosition = 0;
    }
    
    parent.scrollLeft = currentPosition * getChildWidth();
    updateButtons();
}

function scrollPrev() {
    currentPosition--;
    
    // Loop to end when going before start
    if (currentPosition < 0) {
        currentPosition = maxPosition;
    }
    
    parent.scrollLeft = currentPosition * getChildWidth();
    updateButtons();
}

// Auto-slide function
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        scrollNext();
    }, 3000); // 2 seconds
}

// Stop auto-slide when user interacts with buttons
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Add click event listeners to buttons
prevBtn.addEventListener('click', () => {
    scrollPrev();
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    scrollNext();
    resetAutoSlide();
});

// Pause auto-slide on hover
parent.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

parent.addEventListener('mouseleave', () => {
    startAutoSlide();
});

// Initialize
updateButtons();
startAutoSlide();