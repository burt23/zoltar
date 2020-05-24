import React from "react"
import "./socialIconStyles.css"
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaYoutube,
  FaSoundcloud,
  FaPatreon,
} from "react-icons/fa"

const SocialIcons = () => (
  <>
    <div class="flex-center">
      <a href="https://patreon.com/ZoltarMachine">
        <FaPatreon className="footerIcon" size="1x" />
      </a>
      <a href="https://soundcloud.com/user-307876271">
        <FaSoundcloud className="footerIcon" size="1x" />
      </a>
      <a href="https://instagram.com/ZoltarMachine">
        <FaInstagram className="footerIcon" size="1x" />
      </a>
      <a href="https://twitch.tv/zoltar_machine">
        <FaTwitch className="footerIcon" size="1x" />
      </a>
      <a href="https://facebook.com/Zoltarlife">
        <FaFacebook className="footerIcon" size="1x" />
      </a>
      <a href="https://www.youtube.com/channel/UCQZ0TWH9rS1jLI10HnmTOhg">
        <FaYoutube className="footerIcon" size="1x" />
      </a>
    </div>
  </>
)

export default SocialIcons
