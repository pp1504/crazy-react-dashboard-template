import { Box, Stack } from '@mui/material';
import React from 'react'
import { Doughnut,Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const WeeklySalesChart = () => {
  const labels = ['In progrees','On hold','Completed','Cancelled'];

  const data = {
    labels,
    datasets: [{
      type:'pie',
      label: 'Total Sales',
      data: [200,130,250,100],
    
      backgroundColor: ['#b71c1c','#ef9a9a','#ffcdd2','#ffebee'],
      borderColor: 'rgba(255,255,255,0)',
      hoverBackgroundColor:['#b71c1c','#ef9a9a','#ffcdd2','#ffebee'],
      cutout:'50%',
      stacked:true,
      spacing:0,
      offset:0,
 
    },]
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
   
},
interaction: {
  intersect: false,
     
},
  plugins:{
    
  legend:{
    display:true,
    position:'bottom',
    align:'center',
    maxHeight:0,
    maxWidth:5,
    labels:{
      boxWidth:15,
      boxHeight:15,
      textAlign:'center',
      usePointStyle:true,
      padding:15,
      
     
    },
  },
  tooltip:{
    enabled:true,
    backgroundColor:'#000000',
    titleColor:'#ffffff',
    cornerRadius:10,
    multiKeyBackground:'blue',
    usePointStyle:true,
    xAlign:'center',
    yAlign:'bottom',  }
  },
  
};


  return (
    

<Box mt={4}>
  
<div style={{height:'23rem'}}>
      <Pie data={data} options={options} 
      width={"100%"}
    
       />
      </div>

    
</Box>
      
   
   
   
   
  
  )
}

export default WeeklySalesChart