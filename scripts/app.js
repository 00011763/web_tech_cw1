import "./testimonials.js"
import { footer } from "./components/footer.js"
import { navBar } from "./components/navbar.js"

const body = document.querySelector("body")
body.prepend(navBar)
body.append(footer)
