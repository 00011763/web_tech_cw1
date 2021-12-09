import "./testimonials.js"
import { footer } from "./components/footer.js"
import { navBar } from "./components/navbar.js"

const body = document.querySelector("body")
body.prepend(navBar)
body.append(footer)

const hamburger = document.querySelector('nav .hamburger')

hamburger.addEventListener('click', (event) => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('responsive')
})