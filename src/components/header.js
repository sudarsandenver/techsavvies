import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      minHeight: "72px",
      backgroundColor: "#fff",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: "#d4d4d4",
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: "#d4d4d4",
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `0.0rem 1.0875rem`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        alt={siteTitle}
        height="50px"
        width="200px"
        style={{
          marginBottom: `0px`,
          justifyContent: "center",
          marginTop: "9px",
          alignContent: "center",
        }}
      ></img>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
