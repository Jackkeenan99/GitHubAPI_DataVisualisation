import React from 'react';
import Moment from 'react-moment';
import BarChart from './BarChart';
const imgStye = {
  borderRadius: "50%",
  width: "150px",
  height: "150px"
};
const ProfileDetails = (props) => {
  if(props.infoclean){
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
        <BarChart repoNames={['Repos', 'Followers', 'Following']} watchers_count={[props.infoclean.public_repos, props.infoclean.followers, props.infoclean.following]}  label={'User Statistics Bar Chart'} />
        <div>
          {props.infoclean.public_repos ? <div><p>Public Repos: {props.infoclean.public_repos}</p></div> : <p> Repos: 0</p>}
        </div>
        <div>
          {props.infoclean.followers ? <div><p>Followers: {props.infoclean.followers}</p></div> : <p> Followers: 0</p> }
        </div>
        <div>
          {props.infoclean.following ? <div><p>Following: {props.infoclean.following}</p></div> : <p> Following: 0</p> }
        </div>
      </div>

    )}
    else{return null};
};
export default ProfileDetails;
