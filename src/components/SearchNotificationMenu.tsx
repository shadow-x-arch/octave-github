// src/components/SearchNotificationMenu.tsx

import React from 'react';
import './SearchNotificationMenu.css';

interface SearchNotificationMenuProps {
  toggleTheme: () => void;
}

const SearchNotificationMenu: React.FC<SearchNotificationMenuProps> = ({ toggleTheme }) => {
  return (
    <div className="search-notification">
      <input type="text" className="search-input" placeholder="Search..." />
      <div className="icons">
        <span className="notification">
          <i className="bi bi-bell y">
            <img alt="" src="./public/11.png" />
          </i>
          <span className="badge">•</span>
        </span>
        <button onClick={toggleTheme} className="theme-toggle">
          
            <img alt="" src="./public/22.png"  className='i img'/>
          
        </button>
      </div>
    </div>
  );
};

export default SearchNotificationMenu;
