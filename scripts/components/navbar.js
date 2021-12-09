import { createElementFromHtml } from "../functions.js"

export const navBar = createElementFromHtml(`
<nav class="nav">
  <div class="container">
    <ul class="nav-items">
      <li class="nav-item">
        <a href="/about.html">About</a>
      </li>
      <li class="nav-item">
        <a href="/doctors.html">Doctor</a>
      </li>
      <li class="nav-item">
        <a href="/contacts.html">Contact</a>
      </li>
    </ul>
    <div class="brand-logo">
      <a href="/"><img src="images/logo.png" alt="icon" /></a>
      <img class="hamburger" src="images/hamburger.png" alt="">
    </div>
    <ul class="social-links">
      <li>
        <a href="#"
          ><img src="images/social_icons/Instagram.png" alt=""
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src="images/social_icons/Dribbble.png" alt=""
        /></a>
      </li>
      <li>
        <a href="#"><img src="images/social_icons/Twitter.png" alt="" /></a>
      </li>
      <li>
        <a href="#"><img src="images/social_icons/Youtube.png" alt="" /></a>
      </li>
    </ul>
  </div>
</nav>`)
