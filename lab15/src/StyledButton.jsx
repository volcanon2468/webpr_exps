import React from 'react';

function StyledButton() {
  const style = {
    backgroundColor: 'blue',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white'
  };

  return <button style={style}>Inline Styled Button</button>;
}

export default StyledButton;
