import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, number, title }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      {siteTitle}: {number} {title}
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
