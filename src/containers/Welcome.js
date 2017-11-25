import PropTypes from 'prop-types';
import React from 'react';

import '../style.css';

const Welcome = props =>
  <h1 className="hello">Hello, {props.name}!</h1>;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

module.exports = Welcome;
