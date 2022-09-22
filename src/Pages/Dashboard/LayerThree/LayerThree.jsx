import React from 'react'
import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid';
import Transactions from './Transactions/Transactions';
import Websites from './Websites/Websites';
import Products from './Products/Products';
const LayerThree = () => {
  return (
    <Box mt={3}>
<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 8, md: 12 ,lg:12}}>
 
    <Grid item xs={6} sm={4} md={6} lg={4}>
    <Products />
    </Grid>
    <Grid item xs={6} sm={4} md={6} lg={4}>
        <Websites />
    </Grid>
    <Grid item xs={6} sm={8} md={12} lg={4} >
   <Transactions />
    </Grid>

</Grid>
</Box>
  )
}

export default LayerThree