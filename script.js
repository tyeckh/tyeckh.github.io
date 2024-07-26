function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelector(".logo").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        resetAndType();
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(document.querySelector(".section__text"));

document.addEventListener("DOMContentLoaded", () => {
  let footerClickCount = 0;
  // let todaysBlessingCount = 0;
  // let highscore = localStorage.getItem("highscore") || 0;

  const footer = document.querySelector("footer");
  const gameContainer = document.getElementById("gameContainer");
  const woodenFish = document.getElementById("woodenFish");
  const audio = document.getElementById('woodenFishSound');

  // highscoreEl.textContent = `Highscore: ${highscore}`;

  footer.addEventListener("click", () => {
    footerClickCount++;
    if (footerClickCount === 1 && gameContainer.style.display === "block") {
      gameContainer.style.display = "none";
      footerClickCount = 0;
    } else if (footerClickCount === 3) {
      gameContainer.style.display = "block";
      footerClickCount = 0;
    }
  });

  const fishImg = woodenFish.querySelector("img");
  fishImg.addEventListener("click", () => {
    window.knock();
  });

  window.knock = () => {
    // todaysBlessingCount++;
    // todaysBlessingEl.textContent = `Today's Blessing: ${todaysBlessingCount}`;

    // // Update highscore if needed
    // if (todaysBlessingCount > highscore) {
    //   highscore = todaysBlessingCount;
    //   highscoreEl.textContent = `Highscore: ${highscore}`;
    //   localStorage.setItem("highscore", highscore); 
    // }
    // Play sound
    requestAnimationFrame(() => {
      audio.currentTime = 0;
      audio.play().catch(e => console.log('Audio playback error: ', e));

    // Animate the fish
    const muyu = woodenFish.querySelector("img");
    muyu.style.transform = "scale(1.1)";
    setTimeout(() => {
      muyu.style.transform = "scale(1)";
    }, 100);

    // Show floating text
    const floatingText = document.createElement("div");
    floatingText.classList.add("floating-text");
    floatingText.textContent = "功德 + 1";
    floatingText.style.fontWeight = "bold";
    woodenFish.appendChild(floatingText);

    setTimeout(() => {
      floatingText.remove();
    }, 1000);
  });
};
});
