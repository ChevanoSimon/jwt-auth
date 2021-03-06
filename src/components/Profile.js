import React from 'react';

import { AUTH_TOKEN, getUserSnippet } from '../helper';
import CustomPostMaker from './CustomPostMaker';
import CustomPostRetriever from './CustomPostRetriever';
// import PostMaker from './PostMaker';

const Profile = props => {
  const user = JSON.parse(localStorage.getItem(AUTH_TOKEN));
  return (
    <div className="container">
      <div className="profile-container">
        <div className="user-snippet">
          <h1>{getUserSnippet(user.user_display_name)}</h1>
        </div>
        <h2>{user.user_display_name}</h2>
        <button className="btn btn-primary" onClick={() => {
          localStorage.removeItem(AUTH_TOKEN);
          props.history.push('/');
          }}
        >
        Log Out
        </button>
      </div>
      <div>
        {/* <PostMaker /> */}
        <CustomPostMaker />
      </div>
      <div>
        <CustomPostRetriever />
      </div>
    </div>
  )
}

export default Profile;