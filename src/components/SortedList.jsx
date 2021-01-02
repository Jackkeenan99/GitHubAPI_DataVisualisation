import React from 'react';
import Moment from 'react-moment';
import ScatterPlot from './ScatterPlot';
import BarChart from './BarChart';
let repo = ''
let watchers = '';
let forks = '';

const SortedList = (props) => {

  if (props.repitems) {

    return (
      <div>
          {
              props.repitems.map((repitem) =>
                <div>
                  {console.log(repo = repo + repitem.name + ',')}
                  { console.log(watchers = watchers + repitem.watchers_count + ',') }
                  { console.log(forks = forks + repitem.forks_count + ',') }
              </div>
            )}

            <ScatterPlot  y={watchers.split(',')} repo={repo.split(',')} label={'Watchers of repos'} />
            <ScatterPlot  y={watchers.split(',')} repo={repo.split(',')} label={'Forks of repos'} />
            {watchers = ''}
            {repo = ''}
            {forks = ''}
            </div>



      )
  } else { return null;}

  };
export default SortedList;
