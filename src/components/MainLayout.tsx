// src/components/MainLayout.tsx

import React from 'react';
import './MainLayout.css';
import SearchNotificationMenu from './SearchNotificationMenu';
import ChatBoard from './ChatBoard'; // Import ChatBoard
import Dashboard from './Dashboard'; // Import Dashboard

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <SearchNotificationMenu toggleTheme={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <div className="dashboard">
        <Dashboard /> {/* Use Dashboard component */}
      </div>
      <div className="main-content">{children}</div>
      <div className="chat-board">
        <ChatBoard /> {/* Use ChatBoard component */}
      </div>
    </div>
  );
};

export default MainLayout;
