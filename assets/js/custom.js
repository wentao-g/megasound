window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

(function () {
  "use strict";

  window.onload = function () {
    // Back to Top JS
    const topbutton = document.getElementById("backtotop");
    const whatsapp = document.getElementById("whatsapp-button");
    if (topbutton) {
      topbutton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      window.addEventListener("scroll", function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          topbutton.style.opacity = "1";
          if (whatsapp) whatsapp.classList.add("move-up");
        } else {
          topbutton.style.opacity = "0";
          if (whatsapp) whatsapp.classList.remove("move-up");
        }
      });
    }
  };

  // Podcasts And More Slide JS
  var swiper = new Swiper(".podcasts-and-more-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".prev2",
      prevEl: ".next2",
    },
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2.5,
      },
      1440: {
        slidesPerView: 2.5,
      },
      1700: {
        slidesPerView: 3,
      },
      1850: {
        slidesPerView: 3,
      },
    },
  });

  // ScrollCue JS
  scrollCue.init();

  // Hover JS
  try {
    var elements = document.querySelectorAll("[id^='hover-active']");
    elements.forEach(function (element) {
      element.addEventListener("mouseover", function () {
        elements.forEach(function (el) {
          el.classList.remove("active");
        });
        element.classList.add("active");
      });
    });
  } catch (err) {}
})();

const list = document.querySelectorAll(".mobile-menu-list");
function accordion(e) {
  e.stopPropagation();
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else if (this.parentElement.parentElement.classList.contains("active")) {
    this.classList.add("active");
  } else {
    for (i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    this.classList.add("active");
  }
}
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", accordion);
}
