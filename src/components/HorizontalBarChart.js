import React from 'react';
import Plot from 'react-plotly.js';

const HorizontalBarChart = (props) => {
        return (
            <Plot
                data={[

                  {
                      y: props.repo,
                      x: props.watchers,
                      type: 'bar',
                      orientation: 'h',
                      marker: { color: '#YCD0D0' },
                  }
                ]}
                layout={{width: 1000, height: 400, title: props.label }}
            />
        );

}
export default HorizontalBarChart;
