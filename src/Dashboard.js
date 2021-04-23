import React, { Component } from 'react'
import './dashboard.css'
import {Col, Row, Container} from 'react-bootstrap'
import WidgetText from './WidgetText'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Doughnutwidget from './Doughnutwidget'

import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import BarWidget from './BarWidget';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


 class Dashboard extends Component {
    
  
    render() {


        const chartData = [
            
            {
              label: "Iran",
              value: "140"
            },
            {
              label: "Russia",
              value: "115"
            },
            {
              label: "UAE",
              value: "100"
            },
            
          ];
        



        // Create a JSON object to store the chart configurations
    const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "125", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        
       bgColor:'#2a2a2a',
                //Set the x-axis name
      
        
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData
    }
  };
        return (
            <div>
               {/* <WidgetText title='title' value={100} description='some text' /> */}
               <BarWidget title='Title' data={chartData} />
               <Doughnutwidget title='Title' data={chartData} />
               
            </div>
        )
    }
}

export default Dashboard
