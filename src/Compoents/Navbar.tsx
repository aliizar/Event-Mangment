import { useState } from "react";
import "../CSS/Navbar.css";
import { FaUserSecret } from "react-icons/fa";
import { GiDropletSplash } from "react-icons/gi";
import Logo from '../Assests/icons8-conference-94.png'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IoLogOutOutline } from "react-icons/io5";import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  
  const { isAuthenticated, logout , loginWithRedirect } = useAuth0()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>

      <div className="NavbarMobile">
        <div onClick={toggleDropdown} className="Hamburger">
          <div className={`bar ${isDropdownOpen ? "open" : ""}`}></div>
          <div className={`bar ${isDropdownOpen ? "open" : ""}`}></div>
          <div className={`bar ${isDropdownOpen ? "open" : ""}`}></div>
        </div>
        <div className="Icons">
          {isAuthenticated
          &&
          <p className="Drop3" >
          <Link className="dash" to={'/dashboard'}>
            <MdDashboard/> 
          </Link>
          </p>
          }
          <p>
            <button onClick={() => loginWithRedirect()}><FaUserSecret /></button>
          </p>
          <p className="Drop2" onClick={toggleDropdown}>
            <GiDropletSplash />
          </p>
          {
            isAuthenticated &&
            <p className="Drop2" >
              <IoLogOutOutline />
            </p>
          }
          <div className={`DropdownMenu ${isDropdownOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/about'}>
                  About
                </Link>
              </li>
              <li>
                <Link to={'/event'}>
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="NavbarDesktop">
        <div className="LogosNav">
          <center><img className="LogoiMG" src={Logo} alt="" />
            <p>Events Manager</p></center>
        </div>
        <div className="NavLinks">
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/about'}>
            About
          </Link>
          <Link to={'/event'}>
            Events
          </Link>
          {
            isAuthenticated && 
            <Link to={'/dashboard'}>
               DashBoard
          </Link>
          }

        </div>
        <div className="DesktopIcons">
          <div>
            <p className="DesktopDropDown"><GiDropletSplash /></p>
          </div>
          <div className="ProfileIcon" onClick={() => loginWithRedirect()}>

            <p ><FaUserSecret /></p>
          </div>
          {
            isAuthenticated &&
            <div className="ProfileIcon" onClick={() => logout()}  >
              <p className="Drop3" >
                <IoLogOutOutline />
              </p>
            </div>
          }
        </div>
      </div>

      <hr />
    </>
  );
};

export default Navbar;
