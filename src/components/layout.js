/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          backgroundColor: "#f9f9f9",
          height: "300px",
        }}
      >
        <h1 style={{
          textAlign:"center",
          position:"relative",
          top:"35%",
          fontWeight:700,
          fontSize: "3rem",
          fontFamily:"inherit",
          color:"#0455bf"
        }}>Learn the Concepts</h1>

      </div>
      <div
        style={{
          margin: `0px 0px 0px 0px`,
          padding: `74px 150px 213px 150px`,
          backgroundColor: "#ffffff",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
