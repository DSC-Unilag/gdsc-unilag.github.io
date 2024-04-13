const buttons = document.querySelectorAll('.carousel-button')
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'prev' ? -1 : 1;
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
    const slide = slides.children[0]

    // Calculate the distance to scroll based on the window width
    // scroll by width of slide to next slide 
    const slideDistance = slide.offsetWidth * offset

    slides.scrollBy({left: slideDistance, behavior: 'smooth'})
  })
})

const slides = document.querySelectorAll('[data-slides]')
slides.forEach(slide => {
  slide.addEventListener('scroll', () => {
     
    handleSlideButtons(slide)
  })
})

// handle state of carousel buttons based on scroll position
const handleSlideButtons = (slide) => {
  const maxScrollLeft = slide.scrollWidth - slide.clientWidth
  const buttons = slide.closest('[data-carousel]').querySelectorAll('.carousel-button')
  
  buttons[0].classList.toggle('disable', slide.scrollLeft <= 0)
  buttons[1].classList.toggle('disable', Math.ceil(slide.scrollLeft) >= maxScrollLeft)
}

const viewAlLEvents = document.querySelector(".view-events")
viewAlLEvents.addEventListener("click", (e) => {
  e.stopPropagation()

  const pastNavitem = document.querySelector("#events .nav-link.past")
  pastNavitem.classList.remove("hide")

  // Hide view all events button
  viewAlLEvents.classList.add("hide")

  // scroll to top of events section
  document.querySelector("#events").scrollIntoView()
})
