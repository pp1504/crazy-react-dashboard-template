import { Box } from '@mui/material'
import React from 'react'
import MainCard from '../../../Components/MainCard/MainCard'
import TimeSpanFilter from '../../../Components/TimeSpanFillter/TimeSpanFilter'
import RevenueChart from './Charts/RevenueChart'

const RevenuSection = () => {
  return (
    <Box sx={{width:'100%'}}>
        <MainCard title='Total revenue' content={<RevenueChart />} filter={<TimeSpanFilter />} height={'32rem'}/>
    </Box>
  )
}

export default RevenuSection