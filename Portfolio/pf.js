// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}
function downloadResume() {
  var filename = 'DJ_CV.pdf';
  var fileURL = 'https://drive.google.com/file/d/1Ma354IDZ1orw-8pqMg3-zWyIENd7eN_n/view?usp=drive_link'; // Replace with your actual public URL

  var a = document.createElement('a');
  a.href = fileURL;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
}
// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
// Ensure this code runs after the DOM is fully loaded
// Ensure this code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;

  const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
      if (!isDragging) return;

      // Calculate the new scroll position
      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      // Check if the new scroll position exceeds
      // the carousel boundaries
      if (newScrollLeft <= 0 || newScrollLeft >=
          carousel.scrollWidth - carousel.offsetWidth) {

          // If so, prevent further dragging
          isDragging = false;
          return;
      }

      // Otherwise, update the scroll position of the carousel
      carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
  };

  const autoPlay = () => {

      // Return if window is smaller than 800
      if (window.innerWidth < 800) return;

      // Calculate the total width of all cards
      const totalCardWidth = carousel.scrollWidth;

      // Calculate the maximum scroll position
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      // If the carousel is at the end, stop autoplay
      if (carousel.scrollLeft >= maxScrollLeft) return;

      // Autoplay the carousel after every 2500ms
      timeoutId = setTimeout(() =>
          carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () =>
      clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          carousel.scrollLeft += btn.id === "left" ?
              -firstCardWidth : firstCardWidth;
      });
  });
});


