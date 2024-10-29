import { Link } from 'react-router-dom';
import '../CSS/Landing.css';

const Landing = () => {
 
  return (
    <div className="LandingContainer">
      <div className="LandingContent">
        <h1 className="LandingHeading">Looking Bored?</h1>
        <p className="LandingParagraph">Explore exciting events happening around you. Get started or add your own event now!</p>
        <div className="LandingButtons">
          <Link to={'/event'}><button className="LandingButton get-started">Get Started</button></Link>
          <Link to={'/about'}> <button className="LandingButton add-event">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
