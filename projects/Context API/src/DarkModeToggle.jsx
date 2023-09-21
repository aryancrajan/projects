import React from 'react';
import { useDarkMode } from './DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default DarkModeToggle;