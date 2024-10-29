import React, { useState } from 'react';
import '../CSS/Sidebar.css';
import { Link } from 'react-router-dom';
import { CgDrop } from 'react-icons/cg';
import { GiDropletSplash } from 'react-icons/gi';

const SidebarNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isManageDropdownOpen, setIsManageDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleManageDropdown = () => {
    setIsManageDropdownOpen(!isManageDropdownOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="DropDown">
        <GiDropletSplash />
      </button>
      <button className="sidebar-toggle" onClick={toggleDropdown}>
        <CgDrop />
      </button>
      <ul className={`nav-list ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to={'/dashboard'} className="nav-link">Home</Link>
        </li>
        <li>
          <Link to='/event' className="nav-link">View Events</Link>
        </li>
        <li>
          <Link to='/dashboard/form' className="nav-link">Upload Events</Link>
        </li>
        <li>
          <button className="nav-link manage-link" onClick={toggleManageDropdown}>
            Manage Events
          </button>
          <ul className={`submenu ${isManageDropdownOpen ? 'show' : ''}`}>
            <li><Link to='/dashboard/uploads' className="nav-link submenu-link">Uploaded Events</Link></li>
            <li><Link to='/dashboard/registered' className="nav-link submenu-link">Registered Events</Link></li>
          </ul>
        </li>
        <li>
          <button className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
