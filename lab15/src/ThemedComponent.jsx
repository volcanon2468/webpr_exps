import React, { useContext } from 'react';
import ThemeContext from './ThemeContext.jsx';

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#333' : '#ccc',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '10px'
    }}>
      Theme: {theme}
    </div>
  );
}

export default ThemedComponent;
