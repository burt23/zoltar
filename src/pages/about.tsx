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
    {/* <p>Welcome to page 2 ({props.path})</p> */}
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
