import React from "react"
import { Link } from "gatsby"
import "./index.css";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import FileDropZone from "../components/fileDropZone.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FileDropZone />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
