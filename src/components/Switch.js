import React from "react"
import "./switchStyles.css"

const Switch = () => (
  <div id="switch-container">
    <input type="checkbox" class="toggle" id="switch" />
    <h3 id="title">
      Switch between <span id="day">day</span> and <span id="night">night</span>
      <br />
      <span id="by">
        by{" "}
        <a href="http://www.albertohartzet.com" target="_blank">
          <strong>Alberto Hartzet</strong>
        </a>
      </span>
    </h3>
    <label for="switch">
      <div class="switcher" id="on"></div>
    </label>
    <div id="back">
      <div id="css-moon">
        <div id="rotate">
          <div id="oval-container">
            <span class="texture oval t1"></span>
            <span class="texture oval t2"></span>
            <span class="texture oval t3"></span>
            <span class="texture oval t4"></span>
            <span class="texture oval t5"></span>
          </div>
          <div id="circle-container">
            <span class="texture circle at1"></span>
            <span class="texture circle at2"></span>
            <span class="texture circle at3"></span>
          </div>
        </div>
      </div>
      <img
        id="moon"
        src="https://dl.dropboxusercontent.com/u/12646264/assets/luna.svg"
      />
      <div id="stars"></div>
      <ul>
        <li class="star" id="star-1"></li>
        <li class="star" id="star-2"></li>
        <li class="star" id="star-3"></li>
        <li class="star" id="star-4"></li>
        <li class="star" id="star-5"></li>
        <li class="star" id="star-6"></li>
        <li class="star" id="star-7"></li>
        <li class="star" id="star-8"></li>
      </ul>
      <div id="sun"></div>
      <div id="cloud-container">
        <img
          class="cloud"
          id="cloud-1"
          src="https://dl.dropboxusercontent.com/u/12646264/assets/nube.svg"
        />
        <img
          class="cloud"
          id="cloud-2"
          src="https://dl.dropboxusercontent.com/u/12646264/assets/nube.svg"
        />
        <img
          class="cloud"
          id="cloud-3"
          src="https://dl.dropboxusercontent.com/u/12646264/assets/nube.svg"
        />
      </div>
    </div>
  </div>
)
export default Switch
