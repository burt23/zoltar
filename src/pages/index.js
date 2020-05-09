import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ZoltarLogoTrans from "../components/zoltarLogoTrans"
import CitySvg from "../components/citySvg"
import GirlWinowSvg from "../components/girlWindowSvg"
import SEO from "../components/seo"
import DoorLock from "../components/doorLock"
import "./index.css"
import ZoltarLogoBlack from "../components/zoltarLogoBlack"

const IndexPage = () => (
  <>
    <div class="ct" id="t1">
      <div class="ct" id="t2">
        <div class="ct" id="t3">
          <div class="ct" id="t4">
            <div class="ct" id="t5">
              <ul id="menu">
                <a href="#t1">
                  <li class="icon fa fa-bolt" id="uno"></li>
                </a>
                <a href="#t2">
                  <li class="icon fa fa-keyboard-o" id="dos"></li>
                </a>
                <a href="#t3">
                  <li class="icon fa fa-rocket" id="tres"></li>
                </a>
                <a href="#t4">
                  <li class="icon fa fa-dribbble" id="cuatro"></li>
                </a>
                <a href="#t5">
                  <li class="icon fa fa-plus-circle" id="cinco"></li>
                </a>
              </ul>
              <div className="page" id="p1">
                <section id="homepage">
                  <ZoltarLogoBlack />
                </section>
              </div>
              <div className="page" id="p2">
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
                <section class="icon fa fa-plus-circle">
                  <GirlWinowSvg />
                  <span class="title">More</span>
                  <p class="hint">
                    <span>You love one page & CSS only stuff? </span>
                    <br />
                    <a
                      href="https://codepen.io/hrtzt/details/pgXMYb/"
                      target="_blank"
                    >
                      check this pen "Pure CSS One page vertical navigation"
                    </a>
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
