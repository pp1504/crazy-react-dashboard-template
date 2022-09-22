import { Box } from '@mui/material'
import React from 'react'
import MainCard from '../../../Components/MainCard/MainCard'
import WeeklySalesChart from './Charts/WeeklySalesChart'

const WeeklySalesSection = () => {
  return (
    <Box >
      <MainCard title='Order Status' content={<WeeklySalesChart />}  height={'32rem'}/>
    </Box>
  )
}

export default WeeklySalesSection