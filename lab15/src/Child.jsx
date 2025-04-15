import React from 'react';
import PropTypes from 'prop-types';

function Child({ message }) {
  return <p>{message}</p>;
}

Child.propTypes = {
  message: PropTypes.string.isRequired
};

export default Child;
