import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const MainCard = ({ title, content, filter, margintop,height }) => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', borderRadius: '0.7rem',height:'100%'}} >
      <Box p={3} sx={{height:height}}>

        <Box sx={{ display: { xs: 'block', sm: 'flex', md: 'block', lg: 'flex' } }} >
          <Box sx={{ flexGrow: '1' }} mt={margintop}>
            <Typography variant='h6' sx={{ fontSize: 18, fontFamily: 'Manrope' }}>{title}</Typography>
          </Box>

          <Box mt={{ xs: 2, sm: 0, md: 2, lg: 0 }}>

            {filter}


          </Box>
        </Box>


        <Box >
          {content}
        </Box>
      </Box>

    </Box>
  )
}

export default MainCard