import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DoorLock from "../components/doorLock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Under Construction</h1>
    <p>Something great is a brewin'</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
       <Image /> 
    </div> */}
    <DoorLock />
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
