import React from 'react';
import Plot from 'react-plotly.js';

const AreaChart = (props) => {
        return (
            <Plot
                data={[

                  {
                    x: props.repo,
                    y: props.repoSize,
                    fill: 'tozeroy',
                    type: 'scatter'
                  }
                ]}
                layout={{width: 1000, height: 400, title: props.label }}
            />
        );

}
export default AreaChart;
