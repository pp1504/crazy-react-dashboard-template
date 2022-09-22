import { Box, Stack } from '@mui/material'
import React,{useEffect} from 'react'
import RevenuSection from './RevenuSection/RevenuSection'
import StatusCard from './StatusCard/StatusCard'

import WeeklySalesSection from './WeeklySalesSection/WeeklySalesSection'

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LayerThree from './LayerThree/LayerThree'
import LayerFour from './LayerFour/LayerFour'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Helmet } from 'react-helmet';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Dashboard = () => {
 
  return (
    <Box>
      <Helmet>
        
        <title>Crazy | Dashboard</title>
      </Helmet>
      
      <Box>
        <MainTitle text='Dashboard' />
      </Box>
      
      <Box>
        <StatusCard />
      </Box>
<Box mt={3}>
<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
    <Grid item xs={4} sm={8} md={6} >
     <RevenuSection />
    </Grid>
    <Grid item xs={4} sm={8} md={6} >
     <WeeklySalesSection />
    </Grid>

</Grid>
</Box>

<Box>
  <LayerThree />
</Box>

     <Box>
      <LayerFour />
     </Box>

    </Box>
  )
}

export default Dashboard