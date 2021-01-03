import React from 'react';
import Moment from 'react-moment';
import ScatterPlot from './ScatterPlot';
import BubbleChart from './BubbleChart';
import HorizontalBarChart from './HorizontalBarChart';
let repo = ''
let watchers = '';
let forks = '';
let size = '';

const SortedList = (props) => {

  if (props.rep) {

    return (
      <div>
        {watchers = ''}
        {repo = ''}
        {forks = ''}
        {size = ''}
          {
              props.rep.map((r) =>
                <div>
                  {console.log(repo = repo + r.name + ',')}
                  { console.log(watchers = watchers + r.watchers_count + ',') }
                  { console.log(forks = forks + r.forks_count + ',') }
                  { console.log(size = size + r.forks_count/10 + ',') }
              </div>
            )}

            <HorizontalBarChart  watchers={watchers.split(',')} repo={repo.split(',')} label={'Watchers of repos'} />
            <BubbleChart  y={forks.split(',')} repo={repo.split(',')} size={size.split(',')} label={'Forks of repos'} />
            {watchers = ''}
            {repo = ''}
            {forks = ''}
            {size = ''}
            </div>



      )
  } else { return null;}

  };
export default SortedList;
