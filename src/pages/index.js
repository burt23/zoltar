import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DoorLock from "../components/doorLock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DoorLock />
    <Link to="/about/">About</Link>
    <Link to="/store/">Store</Link>
  </Layout>
)

export default IndexPage
