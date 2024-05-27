document.addEventListener("DOMContentLoaded", () => {
  // Adjusts the height of carousel slides based on the wrapper's width when the window is resized if the screen width is greater than 800 pixels.
  updateCarouselHeight();
  window.addEventListener("resize", () => {
    console.log("resize");
    updateCarouselHeight();
  });

  const buttons = document.querySelectorAll(".carousel-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "prev" ? -1 : 1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
      const slide = slides.children[0];

      // Calculate the distance to scroll based on the window width
      // scroll by width of slide to next slide
      const slideDistance = slide.offsetWidth * offset;

      let width = screen.width;
      console.log("width = ", width);
      if (width < 500) {
        slides.scrollBy({ left: slideDistance, behavior: "smooth" });
      } else {
        slides.scrollBy({ top: slideDistance, behavior: "smooth" });
      }
    });
  });

  const slides = document.querySelectorAll("[data-slides]");
  slides.forEach((slide) => {
    slide.addEventListener("scroll", () => {
      console.log("Scroll");
      handleSlideButtons(slide);
    });
  });
});

function updateCarouselHeight() {
  const carouselWrapper = document.querySelectorAll(".carouselWrapper");
  carouselWrapper.forEach((wrapper) => {
    const slides = wrapper.querySelector("ul[data-slides]");
    let currentScreenWidth = screen.width;
    console.log("width?", currentScreenWidth);
    if (currentScreenWidth >= 768) {
      slides.style.height = `${wrapper.clientWidth}px`;
      console.log("height = ", wrapper.clientWidth);
      console.log("greater than 768")
    } else {
      slides.style.height = "auto";
      console.log("height = ", wrapper.clientWidth);
      console.log("less than 768")
    }
  });
}

// handle state of carousel buttons based on scroll position
const handleSlideButtons = (slide) => {
  console.log("Scroll top = ", slide.scrollTop);
  console.log("Scroll width = ", slide.scrollHeight);
  console.log("Client width = ", slide.clientHeight);
  // const maxScrollLeft = slide.scrollWidth - slide.clientWidth
  const maxScrollTop = slide.scrollHeight - slide.clientHeight;
  const buttons = slide
    .closest("[data-carousel]")
    .querySelectorAll(".carousel-button");

  buttons[0].classList.toggle("disable", slide.scrollTop <= 1);
  buttons[1].classList.toggle(
    "disable",
    Math.ceil(slide.scrollTop) >= maxScrollTop - 1
  );
};

const viewAlLEvents = document.querySelector(".view-events");
viewAlLEvents.addEventListener("click", (e) => {
  e.stopPropagation();

  const pastNavitem = document.querySelector("#events .nav-link.past");
  pastNavitem.classList.remove("hide");

  // Hide view all events button
  viewAlLEvents.classList.add("hide");

  // scroll to top of events section
  document.querySelector("#events").scrollIntoView();
});
