import React ,{ Component } from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

class PlotlyChart extends Component{

    constructor(props){
      super(props);
    }

    render() {

      console.log('-->>',this.props.value)
        let data = [
           {
             type: 'scatter',  
             x: [5, 4, 3],     
             y: [6, 2, 3],     
             marker: {        
               color: 'rgb(13, 17, 19)'
             }
           },
          {
            type: 'bar',      
            x: [this.props.value],    
            y: [3, 4, 9],    
            name: 'bar chart '  
          }
        ];
        let layout = {                     
          title: 'Dummy Data',  
          xaxis: {                 
            title: 'No of cars'         
          },
          annotations: [            
            {
              text: 'SA',    
              x: 0,                        
              xref: 'paper',                
              y: 0,                         
              yref: 'paper'                 
            }
          ]
        };
        let config = {
          showLink: false,
          displayModeBar: true
        };
        return (
          <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
        );
      }
}

export default PlotlyChart;