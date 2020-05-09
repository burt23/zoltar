import React from "react"
import ZoltarLogoTrans from "../components/zoltarLogoTrans"
import CitySvg from "../components/citySvg"
import GirlWinowSvg from "../components/girlWindowSvg"
import SEO from "../components/seo"
import "./index.css"
import { FaGalacticRepublic } from "react-icons/fa"
import { GiCastleRuins } from "react-icons/gi"

const IndexPage = () => (
  <>
    <SEO />
    <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
            <div className="ct" id="t5">
              <ul id="menu">
                <a href="#t1">
                  <GiCastleRuins className="icon" id="uno" />
                </a>
                <a href="#t5">
                  <FaGalacticRepublic className="icon" id="cinco" />
                </a>
              </ul>
              <div className="page" id="p1">
                <section id="homepage">
                  <CitySvg />
                  <ZoltarLogoTrans />
                </section>
              </div>
              <div class="page" id="p5">
                <CitySvg />
                <GirlWinowSvg />
                <section className="banner">
                  <span class="title">Welcome</span>
                  <p class="hint">
                    <span>
                      Zoltar is a new Jacksonville based band creating all
                      original music. We are currently accepting gigs throughout
                      the Jacksonville Area.
                    </span>
                  </p>
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
