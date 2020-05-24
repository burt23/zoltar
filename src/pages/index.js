import React from "react"
import ZoltarLogoTrans from "../components/zoltarLogoTrans"
import CitySvg from "../components/citySvg"
import GirlWinowSvg from "../components/girlWindowSvg"
import ZoltarGlitch from "../components/ZoltarGlitch"
import SocialIcons from "../components/socialIcons"
// import Subscribe from "../components/subscribe"
import SEO from "../components/seo"
import "./index.css"
import { GiCastleRuins, GiMagicPortal } from "react-icons/gi"

const IndexPage = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Varela"
      rel="stylesheet"
      type="text/css"
    />
    <SEO />
    <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
            <div className="ct" id="t5">
              <ul id="menu">
                <a href="#t1">
                  <GiCastleRuins className="icon" size="2x" id="uno" />
                </a>
                <a href="#t5">
                  <GiMagicPortal className="icon" size="2x" id="cinco" />
                </a>
              </ul>
              <div className="page" id="p1">
                <section id="homepage">
                  <CitySvg />
                  <div id="logoWrapper">
                    <ZoltarLogoTrans />
                  </div>
                  <SocialIcons />
                </section>
              </div>
              <div class="page" id="p5">
                <CitySvg />
                <GirlWinowSvg />
                <section className="banner">
                  <ZoltarGlitch />
                  <p class="hint">{/* <SocialIcons /> */}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
