import React from 'react';
import Moment from 'react-moment';
const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};
const ProfileDetails = (props) => {
    return (
      <div>
        <div>
          {props.infoclean.avatar_url ?
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStye}/> : null }
        </div>
        <div>
          {props.infoclean.name ? <div><p>Name: {props.infoclean.name}</p></div> : null }
        </div>
        <div>
          {props.infoclean.bio ? <div><p>Bio: {props.infoclean.bio}</p></div> : null }
        </div>
        <div>
          {props.infoclean.public_repos ? <div><p>Public Repos: {props.infoclean.public_repos}</p></div> : null }
        </div>
        <div>
          {props.infoclean.followers ? <div><p>Followers: {props.infoclean.followers}</p></div> : null }
        </div>
        <div>
          {props.infoclean.following ? <div><p>Following: {props.infoclean.following}</p></div> : null }
        </div>
        <div>
          {props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
        </div>
      </div>
    )
};
export default ProfileDetails;
