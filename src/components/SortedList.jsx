import React from 'react';
import Moment from 'react-moment';
const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              <div>
                <div>
                <b>{repitem.name}</b>
                </div>
                <div>
                 Language: {repitem.language}
                </div>
                <div>
                Watchers: {repitem.watchers_count}
                </div>
                <div>
                Forks: {repitem.forks_count}
                </div>
              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };
export default SortedList;
