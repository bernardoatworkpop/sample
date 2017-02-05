import React from 'react';
import {css, StyleSheet} from 'glamor/aphrodite';

// button styles
const styleSheet = StyleSheet.create({
  button: {
    fontSize: '14px',
    lineHeight: '16px',
    ':focus': {
      outline: 'none',
    },
    borderRadius: '4px',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    ':hover': {
      backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.12) 100%)',
    },
  },
});

/**
 * Button
 * @param onClick
 * @param label
 * @returns {XML}
 * @constructor
 */
function Button({onClick, label}) {
  return (
    <button
      onClick={onClick}
      className={css(styleSheet.button)}
    >
      {label}
    </button>
  );
}

export default Button;
