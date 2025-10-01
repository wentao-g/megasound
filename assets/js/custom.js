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

  var swiper = new Swiper(".services-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1.3 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2.5 },
    },
  });

  var swiper = new Swiper(".artists-slide", {
    slidesPerView: 1,
    spaceBetween: 12,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4.5,
      },
    },
  });

  // Podcasts And More Slide JS
  var swiper = new Swiper(".podcasts-and-more-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    preventClicks: true,
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
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", accordion);
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = form.querySelector("[name='name']").value.trim();
  const email = form.querySelector("[name='email']").value.trim();
  const message = form.querySelector("[name='message']").value.trim();

  if (!name.trim() || !email.trim() || !message.trim()) {
    alert("Please fill up the form");
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  const subject = `${name} sent a message from MegaSound website`;

  const formData = new FormData(form);
  formData.append("subject", subject);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Try again later.");
  }
});
