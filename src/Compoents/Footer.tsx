
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <>



    <footer className="FooterContainer">


        <div className="FooterSection">
          <h3 className="FooterHeading">Follow Us</h3>
          <div className="FooterIcons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="FooterBottom">
          <p>&copy; 2024 EventHub. All Rights Reserved.</p>
        </div>
      </footer></>
  );
};

export default Footer;
