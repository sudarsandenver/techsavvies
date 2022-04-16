import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import { TextField, IconButton, InputAdornment } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import Button from '@mui/material/Button';

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
      <span style={{
        float: "right",
      }}>
        <TextField
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="text" style={{
            "textAlign": "center",
            "top": "15px"
        }}>Log In</Button>
      </span>
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
