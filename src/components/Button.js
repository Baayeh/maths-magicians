import React from "react";
import PropTypes from 'prop-types'

const Button = ({ label, action }) => (
    <button type="button" className="key-box text-primary" onClick={() => action(label)}>{label}</button>
  )

  Button.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  };

export default Button

