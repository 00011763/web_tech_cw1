import { createElementFromHtml } from "../functions.js"

export const footer = createElementFromHtml(`
<footer>
  <div class="container">
    <article class="main-info">
      <img src="images/logo_white.png" alt="" />
      <h2>About Us</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s,
      </p>
      <p style="margin-top: 16px">
        <a href="https://jigsaw.w3.org/css-validator/check/referer">
            <img style="border:0;width:88px;height:31px"
                src="https://jigsaw.w3.org/css-validator/images/vcss"
                alt="Valid CSS!" />
        </a>
      </p>
    </article>
    <article class="contact-info">
      <div class="entry">
        <h4>Business hours:</h4>
        <p>Monday to Saturday 9:30 am - 4:30 pm</p>
      </div>
      <div class="entry">
        <h4>Address:</h4>
        <p>A-67 south Ex Delhi-11002</p>
      </div>
      <div class="entry">
        <h4>Email:</h4>
        <p>abc@abc.com</p>
      </div>
      <div class="entry">
        <h4>Phone:</h4>
        <p>1800 - 458495-4455</p>
      </div>
    </article>
    <article class="social-links">
      <h2>Stay Connected</h2>
      <div class="links">
        <a href="#">
          <img src="images/social_icons_white/facebook.png" alt="" />
          Facebook
        </a>
        <a href="#">
          <img src="images/social_icons_white/twitter.png" alt="" />
          Twitter
        </a>
        <a href="#">
          <img src="images/social_icons_white/google.png" alt="" />
          Google
        </a>
        <a href="#">
          <img src="images/social_icons_white/instagram.png" alt="" />
          Instagram
        </a>
        <a href="#">
          <img src="images/social_icons_white/youtube.png" alt="" />
          Youtube
        </a>
      </div>
    </article>
    <article class="newsletter">
      <h2>Newsletter</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="input-group">
        <input type="text" placeholder="Enter Email ID" />
        <button class="btn">Subscribe</button>
      </div>
    </article>
  </div>
</footer>`)
