import React from 'react';
import Moment from 'react-moment';
import ScatterPlot from './ScatterPlot';
import BubbleChart from './BubbleChart';
import HorizontalBarChart from './HorizontalBarChart';
import AreaChart from './AreaChart';
let repo = ''
let watchers = '';
let forks = '';
let size = '';
let repoSize = '';

const SortedList = (props) => {

  if (props.rep) {

    return (
      <div>
        {watchers = ''}
        {repo = ''}
        {forks = ''}
        {repoSize = ''}
        {size = ''}
          {
              props.rep.map((r) =>
                <div>
                  {console.log(repo = repo + r.name + ',')}
                  { console.log(watchers = watchers + r.watchers_count + ',') }
                  { console.log(forks = forks + r.forks_count + ',') }
                  { console.log(repoSize = repoSize + r.size + ',') }
                  { console.log(size = size + r.forks_count/10 + ',') }
              </div>
            )}

            <HorizontalBarChart  watchers={watchers.split(',')} repo={repo.split(',')} label={'Watchers of repos'} />
            <BubbleChart  y={forks.split(',')} repo={repo.split(',')} size={size.split(',')} label={'Forks of repos'} />
            <AreaChart  repoSize={repoSize.split(',')} repo={repo.split(',')} label={'Size of repos'} />
            {watchers = ''}
            {repo = ''}
            {forks = ''}
            {size = ''}
            {repoSize = ''}
            </div>



      )
  } else { return null;}

  };
export default SortedList;
