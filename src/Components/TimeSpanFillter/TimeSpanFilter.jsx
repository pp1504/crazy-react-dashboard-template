import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function TimeSpanFillter() {
  const [newValue, setnewValue] = React.useState('Jan-Jun');

  const handleChange = (event, newValue) => {
    setnewValue(newValue);
  };

  return (
  
      <ToggleButtonGroup
      color="primary"
      value={newValue}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        width:'100%',
        height:'2rem',
        fontWeight:'800'
      
      }}
    >
      <ToggleButton value=" Weekly" >
        Weekly</ToggleButton>
      <ToggleButton value="Jan-Jun">Jan-Jun</ToggleButton>
      <ToggleButton value="Jul-Dec">Jul-Dec</ToggleButton>
    </ToggleButtonGroup>
    
  );
}
