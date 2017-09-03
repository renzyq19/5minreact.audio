import React from 'react'
import PropTypes from 'prop-types'

import './reset.css'
import './base.css'
import './typography.css'

const Template = ({ children }) =>
  <div className="wrapper">
    { children() }
  </div>


Template.propTypes = {
  children: PropTypes.function.isRequired,
}

export default Template
