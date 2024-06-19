import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Hobbies:</strong> {profile.hobbies.join(', ')}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profile;
