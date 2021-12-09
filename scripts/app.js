import "./testimonials.js"
import { footer } from "./components/footer.js"
import { navBar } from "./components/navbar.js"
import { testimonials } from "./components/testimonial.js"

const body = document.querySelector("body")
body.prepend(navBar)
body.append(footer)

const testimonialWrapper = body.querySelector('.slider-wrapper')
if (testimonialWrapper) {
  for (let testimonial of testimonials) {
    testimonialWrapper.append(testimonial)
  }
  
  const hamburger = document.querySelector('nav .hamburger')
  hamburger.addEventListener('click', (event) => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('responsive')
  })
}
