import { Box, Stack } from '@mui/material';
import React from 'react'
import { Doughnut,Pie,PolarArea} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const WebsiteChart = () => {
  const labels = ['Direct','Organic','Referral','Mail'];

  const data = {
    labels,
    datasets: [{
      
      label: 'Total Sales',
      data: [220,170,140,120],
    
      backgroundColor: ['#b71c1c','#ffe082','#a5d6a7','#4fc3f7'],
      borderColor: 'rgba(255,255,255,0)',
      hoverBackgroundColor:['#b71c1c','#ffe082','#a5d6a7','#4fc3f7'],
      cutout:'50%',
      stacked:true,
      spacing:0,
      offset:0,
 
    },]
  };

  const options={
    responsive:true,
    maintainAspectRatio: false,
   
  
   scales: {
    r: {
        display: false
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
    
<Box mt={1} mb={0} >
  
  <div style={{height:'17rem'}} >
        <PolarArea data={data} options={options} 
        width={"100%"}
      
         />
        </div>
  
      
  </Box>
   
   
   
   
  
  )
}

export default WebsiteChart