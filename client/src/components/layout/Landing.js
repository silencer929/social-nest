import React from 'react';
// import './Landing.css'; // Ensure you create this CSS file for styling
import logo from '../../img/app-logo.jpeg';
import banner from '../../img/banner.png';
import video from '../../img/video-file.mp4';
const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src={logo} className="logo" alt="Website Logo" />
        <h1>Welcome to Our Social Media Site</h1>
      </header>
      <section className="landing-content">
        <p>
          Connect with friends and the world around you. Share your thoughts, 
          photos, and videos with your community.
        </p>
        <img src={banner} className="supporting-image" alt="Supporting" />
        <video src={video} className="supporting-video" controls></video>
      </section>
    </div>
  );
};

export default Landing;
