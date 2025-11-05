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

