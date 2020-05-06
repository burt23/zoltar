// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <h1>Under Construction</h1>
    <p>Come back soon!</p>
    {/* <p>Welcome to page 2 ({props.path})</p> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
