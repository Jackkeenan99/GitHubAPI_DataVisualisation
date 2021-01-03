import React from 'react';
import Moment from 'react-moment';
import ScatterPlot from './ScatterPlot';
import BubbleChart from './BubbleChart';
import PieChart from './PieChart';
let repo = ''
let watchers = '';
let forks = '';
let size = '';
let repoSize = '';

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
                  { console.log(size = size + repitem.forks_count/10 + ',') }
                  { console.log(repoSize = repoSize + repitem.size + ',') }
              </div>
            )}

            <ScatterPlot  y={watchers.split(',')} repo={repo.split(',')} label={'Watchers of repos'} />
            <PieChart repoSize={repoSize.split(',')} repoNames={repo.split(',')} label={'Size of repos'} />
            {watchers = ''}
            {repo = ''}
            {forks = ''}
            {repoSize = ''}
            </div>



      )
  } else { return null;}

  };
export default SortedList;
