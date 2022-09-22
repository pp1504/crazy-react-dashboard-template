import { Box, Stack } from '@mui/material';
import React from 'react'
import { Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const RevenueCharts = () => {
  const labels = ['Jan','Feb','Mar','Apr','May','Jun'];

  const data = {
    labels,
    datasets: [{
      type:'bar',
      label: 'Total Sales',
      data: [900, 590, 900, 801, 566, 565, 480,574,763,829,678,450],
      barPercentage:0,
      barThickness:20,
      backgroundColor: '#b71c1c',
      borderColor: '#b71c1c',
      hoverBackgroundColor:'#b71c1c',
    
      stacked:true,
 
    },{
      type:'bar',
      label: 'Total Profit',
      data: [800, 590, 900, 801, 566, 565, 480,574,763,829,678,450],
      barPercentage:0,
      barThickness:20,
      backgroundColor: '#e57373',
      borderColor: '#e57373',
      hoverBackgroundColor:'#e57373',
      stacked:true,
 
    }, {
      type:'bar',
      label: 'Loss',
      data: [100, 548, 890, 719, 496, 527, 450,540,760,820,673,400],
      barThickness:20,
      backgroundColor: '#ffcdd2',
      borderColor: '#ffcdd2',
      hoverBackgroundColor:'#ffcdd2',
      stacked:true,
 
    },{
      type:'bar',
      label: 'Maintainance',
      data: [300, 548, 890, 719, 496, 527, 450,540,760,820,673,400],
      barThickness:20,
      backgroundColor: '#ffebee',
      borderColor: '#ffebee',
      hoverBackgroundColor:'#ffebee',
      stacked:true,
 
    }]
  };

  const options={
    responsive:true,
    maintainAspectRatio: false,
   
    animations: {
      type:'linear'
    },
   elements:{
    bar:{
      radius:6,
      barPercentage:0.8,
     }
   },
   scales: {
    stackWeight:53,
    y: {
        beginAtZero:true,
        suggestedMin: 50,
        suggestedMax: 150,
        stack: 'demo',
        stackWeight: 2,
        stacked:true,
        grace: '5%',
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, ticks) {
              return '$' + value;
          },
          stepSize:100,
        },
        grid:{
          borderColor:'#9e9e9e',
          color:'#eeeeee',
          lineWidth:0.5,
          tickLength:8,

        }
    },
    x: {
      stacked:true,
      grid:{
        borderColor:'#9e9e9e',
        color:'rgba(255,255,255,0)',
      }
  }
},
interaction: {
  intersect: false,
     
},
  plugins:{
    
  legend:{
    display:true,
    position:'bottom',
    align:'center',
    maxHeight:30,
    maxWidth:10,
    labels:{
      boxWidth:15,
      boxHeight:18,
      textAlign:'center',
      usePointStyle:false,
      padding:15,
      
     
    },
  },
  tooltip:{
    enabled:true,
    backgroundColor:'#000000',
    titleColor:'#ffffff',
    cornerRadius:10,
    multiKeyBackground:'blue',
    usePointStyle:false,
    xAlign:'center',
    yAlign:'bottom',  }
  },
  
};


  return (
    
<Box mt={2}>
<div style={{height:'23rem'}}>
      <Bar data={data} options={options} 
      width={"100%"}
    
       />
      </div>
   
</Box>

     
   
   
   
  
  )
}

export default RevenueCharts