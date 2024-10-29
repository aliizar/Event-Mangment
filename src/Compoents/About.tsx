
import '../CSS/About.css'; 

const About = () => {
  return (
    <>
   <hr />
    <div className="AboutContainer">
      <div className="AboutContent">
        <h1 className="AboutHeading">About Events Manager</h1>
        
        <p className="AboutIntro">
          Welcome to Events Manager! Do you love discovering exciting events or organizing them? Events Manager is your all-in-one platform where you can <strong>create, manage, and explore events</strong> with ease. Whether you're looking to promote your event or find the next big one to attend, we've got you covered!
        </p>
        
        <h2 className="AboutMission">Our Mission</h2>
        <p className="AboutMissionText">
          Our mission is to simplify the process of <strong>event management</strong> and <strong>discovery</strong>. We empower users to effortlessly organize and share their events while helping others find and participate in experiences they are passionate about.
        </p>
        
        <h2 className="AboutFeaturesHeading">Key Features:</h2>
        <ul className="AboutFeaturesList">
          <li>User-Friendly Event Creation</li>
          <li>Discover Events</li>
          <li>Event Listings</li>
          <li>Login & User Profiles</li>
          <li>Seamless Event Sharing</li>
        </ul>
        
        <h2 className="AboutHowItWorksHeading">How It Works:</h2>
        <ol className="AboutHowItWorksList">
          <li>Create an Account</li>
          <li>Add Your Events</li>
          <li>Manage Your Events</li>
          <li>Browse Events</li>
          <li>Engage with Events</li>
        </ol>
        
        <h2 className="AboutWhyChooseHeading">Why Choose Events Manager?</h2>
        <p className="AboutWhyChooseText">
          At Events Manager, we make sure every aspect of event planning and exploration is smooth and intuitive. Whether you are organizing your own event or looking to attend, our platform is designed to make your experience as seamless as possible.
        </p>

        <h2 className="AboutJoinUsHeading">Join Us Today!</h2>
        <p className="AboutJoinUsText">
          Get started by creating an account, adding your events, and becoming part of a community that shares exciting experiences. <strong>Let’s manage events together!</strong>
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
