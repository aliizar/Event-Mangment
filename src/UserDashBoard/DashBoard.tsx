import React from 'react';
import SidebarNav from './Sidebar'; 
import './DashBoard.css'; 
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <SidebarNav /> 
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
