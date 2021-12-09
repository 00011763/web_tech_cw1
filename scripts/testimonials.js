const testimonials = [...document.querySelectorAll(".testimonial")]

const current = 1

// Toggling testimonial effect
testimonials.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    testimonials[current].classList.remove("active")
  })

  item.addEventListener("mouseout", () => {
    testimonials[current].classList.add("active")
  })
})
