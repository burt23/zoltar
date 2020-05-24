import React from "react"
import "./socialIconsStyles.css"

const SocialIcons = () => (
  <section id="socialIconsWrapper">
    <div>
      <ul id="socialIconsList">
        <li className="socialIcon">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="fa fa-facebook"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="fa fa-twitter"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="fa fa-instagram"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="fa fa-linkedin"></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default SocialIcons
