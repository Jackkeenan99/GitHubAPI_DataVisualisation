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
               layout = {{ title: 'Marker Size', showlegend: false,  height: 600, width: 600 }}

              />
          );

  }
  export default BubbleChart;
