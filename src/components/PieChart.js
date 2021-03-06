import React from 'react';
import Plot from 'react-plotly.js';

const PieChart = (props) => {

    return (

        <div class="pie"><Plot data={[
            {
                values: props.repoSize,
                labels: props.repoNames,
                type: 'pie'
            }
        ]}
            layout={{ width: 1000, height: 500, title:props.label}}
        />
        </div>
    );

}


export default PieChart;
