import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.style.setProperty('--dashboard-background', theme.dashboardBackground);
    document.documentElement.style.setProperty('--icon-color', theme.iconColor);
    document.documentElement.style.setProperty('--highlight-gradient', theme.highlightGradient);
    document.documentElement.style.setProperty('--hover-background-color', theme.hoverBackgroundColor);
    document.documentElement.style.setProperty('--hover-icon-color', theme.hoverIconColor);
    document.documentElement.style.setProperty('--top-border-color', theme.topBorderColor);
  }, [theme]);

  return (
    <div>
      <ul className="dashboard ul">
        <ul></ul>
        <ul className="highlight"></ul>
        <p><img alt="" src="./public/6.png" className="top" /></p>
        <li><i className="fas fa-home"><img alt="" src="./public/1.png" /></i></li>
        <li><i className="fas fa-envelope"><img alt="" src="./public/2.png" /></i></li>
        <li><i className="fas fa-list"><img alt="" src="./public/3.png" /></i></li>
        <li><i className="fas fa-folder-open"><img alt="" src="./public/4.png" /></i></li>
      </ul>
    </div>
  );
};

export default Dashboard;
