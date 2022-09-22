import { Box, Typography,Stack } from '@mui/material'
import React from 'react'

const DrawerBox = ({title,backgroundcolor,column1,column2,column3}) => {

  return (
   <Box 
   sx={{backgroundColor:backgroundcolor,
   borderRadius:5,
   textAlign:'center',
  
}} 
   pt={2} pb={2}
   >

<Typography variant='h6' gutterBottom sx={{fontSize:18,fontWeight:400,color:'gray'}}>{title}</Typography>
<Box>

<Typography gutterBottom>{column1}</Typography>
<Typography gutterBottom>{column2}</Typography>
<Typography gutterBottom>{column3}</Typography>
</Box>

</Box>
  )
}

export default DrawerBox