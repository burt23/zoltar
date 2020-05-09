import React from "react"
import "./zoltarSpinnerStyles.css"

const ZoltarSpinner = () => (
  <div id="zoltarSpinnerWrapper">
    <h1 id="text">
      <span className="word" dataWord="Loading" charindex={0}>
        <span className="char" datachar="Z" charindex={0}>
          Z
        </span>
        <span class="char" datachar="o" charindex={1}>
          o
        </span>
        <span class="char" datachar="l" charindex={2}>
          l
        </span>
        <span class="char" datachar="t" charindex={3}>
          t
        </span>
        <span class="char" datachar="a" charindex={4}>
          a
        </span>
        <span class="char" datachar="r" charindex={5}>
          r
        </span>
      </span>
    </h1>
  </div>
)

export default ZoltarSpinner
