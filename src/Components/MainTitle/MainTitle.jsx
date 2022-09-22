import { Box ,Typography} from '@mui/material'
import React from 'react'

const MainTitle = ({text}) => {

const styles={
fontSize:'1.7rem',
fontFamily:'Manrope',
fontWeight:600,
color:'#212121',

};
  return (
    <Box sx={{display:'flex'}}>
        <Box >
            <Typography 
           
            sx={styles}
            >
               {text}
                </Typography>
        </Box>
    </Box>
  )
}

export default MainTitle