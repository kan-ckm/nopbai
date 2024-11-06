// Lấy tất cả các liên kết trong sidebar và menu điều hướng
const sidebarLinks = document.querySelectorAll(".sidebar a");
const navLinks = document.querySelectorAll("nav a");
const iframe = document.getElementById("contentFrame");

// Function xử lý click cho sidebar
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = this.getAttribute("data-src");
    if (url) {
      iframe.src = url;
      iframe.style.display = "block";
    }
  });
});

// Function xử lý click cho menu điều hướng
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const action = this.getAttribute("data-action");
    const url = this.getAttribute("data-src") || this.getAttribute("href");

    if (action === "iframe" && url) {
      iframe.src = url;
      iframe.style.display = "block";
    } else if (action === "navigate" && url) {
      window.location.href = url;
    }
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}
