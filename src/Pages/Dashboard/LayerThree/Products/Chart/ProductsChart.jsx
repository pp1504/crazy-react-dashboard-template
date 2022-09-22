import { Box, Stack } from '@mui/material';
import React from 'react'
import { Doughnut,Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ProductsChart = () => {
  const labels = ['Men Fasion','Accessories','Electronics','Glossary','Women Fasion'];

  const data = {
    labels,
    datasets: [{
      type:'pie',
      label: 'Total Sales',
      data: [200,130,220,100,230],
      borderWidth:0,
      backgroundColor: ['#f06292','#7986cb','#ffd54f','#4dd0e1','#aed581'],
      borderColor: 'rgba(255,255,255,0)',
      hoverBackgroundColor:['#f06292','#7986cb','#ffd54f','#4dd0e1','#aed581'],
      cutout:'88%',
      stacked:true,
      spacing:10,
      offset:0,
 
    },
]
  };

  const options={
    responsive:true,
    maintainAspectRatio: false,
   
    animations: {
      type:'linear'
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
    maxWidth:10,
    labels:{
      boxWidth:17,
      boxHeight:15,
      textAlign:'center',
      usePointStyle:true,
      padding:10,
      
     
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
    

<Box mt={3.5} mb={0} >
  
<div style={{height:'15rem'}}>
      <Pie data={data} options={options} 
      width={"100%"}
    
       />
      </div>

    
</Box>
      
   
   
   
   
  
  )
}

export default ProductsChart