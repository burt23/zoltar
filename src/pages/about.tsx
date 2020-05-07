// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DoorLock from "../components/doorLock"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <DoorLock />
    <Link to="/">Home</Link>
    <Link to="/store">Store</Link>
  </Layout>
)

export default SecondPage
