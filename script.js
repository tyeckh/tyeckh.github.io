function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const text = "Chan Kit Ho";
let index = 0;
const typingSpeed = 200; 
const titleElement = document.getElementById("typing-text");

function type() {
  if (index < text.length) {
    titleElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}

function resetAndType() {
  index = 0;
  titleElement.innerHTML = " ";
  type();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      resetAndType();
    }
  });
}, {
  threshold: 1
});

observer.observe(document.querySelector(".section__text"));