import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import ZoltarLogoTrans from "../components/zoltarLogoTrans"
import CitySvg from "../components/citySvg"
// import GirlWinowSvg from "../components/girlWindowSvg"
// import SEO from "../components/seo"
// import DoorLock from "../components/doorLock"
import "./index.css"
// import ZoltarLogoBlack from "../components/zoltarLogoBlack"
// import { FaGalacticSenate, FaGalacticRepublic } from "react-icons/fa"
// import { GiCastleRuins, GiBurningPassion, GiMagicPortal } from "react-icons/gi"

const IndexPage = () => (
  <>
    <div class="ct" id="t1">
      <div class="ct" id="t2">
        <div class="ct" id="t3">
          <div class="ct" id="t4">
            <div class="ct" id="t5">
              {/* <ul id="menu">
                <a href="#t1">
                  <GiCastleRuins className="icon" id="uno" />
                </a>
                <a href="#t2">
                  <FaGalacticSenate className="icon" id="dos" />
                </a>
                <a href="#t3">
                  <FaGalacticRepublic className="icon" id="tres" />
                </a>
                <a href="#t4">
                  <GiBurningPassion className="icon" id="cuatro" />
                </a>
                <a href="#t5">
                  <GiMagicPortal className="icon" id="cinco" />
                </a>
              </ul> */}
              <div className="page" id="p1">
                <section id="homepage">
                  <CitySvg />
                  <ZoltarLogoTrans />
                </section>
              </div>
              {/* <div className="page" id="p2">
                <CitySvg />
              </div>
              <div className="page" id="p3">
                <DoorLock />
              </div>
              <div className="page" id="p4">
                <section>
                  <span class="title">Dribbble</span>
                  <ZoltarLogoBlack />
                </section>
              </div>
              <div class="page" id="p5">
                <GirlWinowSvg />
                <section class="icon fa fa-plus-circle">
                  <span class="title">Contact</span>
                  <p class="hint">
                    <span>
                      Sign up for our newsletter today to stay up to date with
                      the latest Music and content from Zoltar. Make sure to
                      check us out on Patreon, and we thank you all for the
                      support and love!{" "}
                    </span>
                  </p>
                </section>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
