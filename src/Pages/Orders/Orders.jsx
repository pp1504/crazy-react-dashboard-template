import React,{useEffect} from 'react'

import {Box} from '@mui/material'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Helmet } from 'react-helmet';
import OrdersTable from './Table/OrdersTable';
const Orders = () => {



  return (
    <Box>
        <Helmet>
        
        <title>Crazy | Orders</title>
      </Helmet>
      <Box>
          <MainTitle text='Order' />
      </Box>
      <Box mt={3}>
          <OrdersTable />
      </Box>

    </Box>

  
  )
}

export default Orders