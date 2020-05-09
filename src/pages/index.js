import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import ZoltarLogoTrans from "../components/zoltarLogoTrans"
import CitySvg from "../components/citySvg"
import ZoltarSpinner from "../components/ZoltarSpinner"
// import Switch from "../components/Switch"
import GirlWinowSvg from "../components/girlWindowSvg"
// import SEO from "../components/seo"
import DoorLock from "../components/doorLock"
import "./index.css"
import ZoltarLogoBlack from "../components/zoltarLogoBlack"
import { FaGalacticSenate, FaGalacticRepublic } from "react-icons/fa"
import { GiCastleRuins, GiBurningPassion, GiMagicPortal } from "react-icons/gi"

const IndexPage = () => (
  <>
    <div class="ct" id="t1">
      <div class="ct" id="t2">
        <div class="ct" id="t3">
          <div class="ct" id="t4">
            <div class="ct" id="t5">
              <ul id="menu">
                <a href="#t1">
                  <GiCastleRuins className="icon" id="uno" />
                </a>
                {/* <a href="#t2">
                  <FaGalacticSenate className="icon" id="dos" />
                </a>
                <a href="#t3">
                  <FaGalacticRepublic className="icon" id="tres" />
                </a>
                <a href="#t4">
                  <GiBurningPassion className="icon" id="cuatro" />
                </a> */}
                <a href="#t5">
                  <GiMagicPortal className="icon" id="cinco" />
                </a>
              </ul>
              <div className="page" id="p1">
                <section id="homepage">
                  <CitySvg />
                  {/* <Switch /> */}
                  <ZoltarLogoTrans />
                </section>
              </div>
              {/* <div className="page" id="p2">
                <span class="title">A little history</span>
                <CitySvg />
              </div>
              <div className="page" id="p3">
                <CitySvg />
                <DoorLock />
              </div>
              <div className="page" id="p4">
                <section>
                  <span class="title">Market Place</span>
                  <span class="title">Coming Soon</span>
                  <DoorLock />
                  <CitySvg />
                </section>
              </div> */}
              <div class="page" id="p5">
                {/* <ZoltarSpinner /> */}
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
