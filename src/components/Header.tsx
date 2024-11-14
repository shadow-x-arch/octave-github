// src/components/Header.tsx

import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <header>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;

