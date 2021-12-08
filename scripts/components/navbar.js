import { createElementFromHtml } from "../functions.js"

export const navBar = createElementFromHtml(`
<nav class="nav">
  <div class="container">
    <ul>
      <li class="nav-item">
        <a href="#">About</a>
      </li>
      <li class="nav-item">
        <a href="#">Doctor</a>
      </li>
      <li class="nav-item">
        <a href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a href="#">Contact</a>
      </li>
    </ul>
    <div class="brand-logo">
      <a href="/"><img src="images/logo.png" alt="icon" /></a>
    </div>
    <ul>
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
