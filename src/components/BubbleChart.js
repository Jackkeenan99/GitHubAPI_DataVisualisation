import React from 'react';
import Plot from 'react-plotly.js';


const BubbleChart = (props) => {
        return (
            <Plot
              data = {[
                {
                  x: props.repo,
                  y: props.fork,
                  mode: 'markers',
                  marker: { size: props.size},
                }
            ]}
               layout = {{ title: 'Forks on Repositories', showlegend: false,  height: 600, width: 1000 }}

              />
          );

  }
  export default BubbleChart;
