import React from 'react';
import '../CSS/Welcome.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AsideWelcome: React.FC = () => {
    const { user } = useAuth0()
  return (
    <div className="LandingContainer">
      <div className="LandingContent">
        <h1 className="LandingHeading">Welcome {user?.name?.slice(0,11)} </h1>
        <p className="LandingParagraph">Now You can manage your events add the events deletes the event and many more</p>
        <div className="LandingButtons">
          <Link to={'/dashboard/form'}><button className="LandingButton get-started">Add Event </button></Link>
          <Link to={'/dashboard/uploads'}> <button className="LandingButton add-event"> Manage Events </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AsideWelcome;
