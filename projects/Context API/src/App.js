import React from 'react';
import './App.css';
import DarkModeToggle from './DarkModeToggle';
import { DarkModeProvider,useDarkMode } from './DarkModeContext';
import './dark-mode.css';

function App() {
  const { isDarkMode } = useDarkMode();
  return (
    <DarkModeProvider>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <h1>Dark Mode Switcher</h1>
        <DarkModeToggle />
      </div>
    </DarkModeProvider>
  );
}

export default App;
