import React from 'react';

function StyledButtonInternal() {
  return (
    <>
      <style>
        {`
          .internal-btn {
            background-color: green;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
          }
        `}
      </style>
      <button className="internal-btn">Internal Styled Button</button>
    </>
  );
}

export default StyledButtonInternal;
