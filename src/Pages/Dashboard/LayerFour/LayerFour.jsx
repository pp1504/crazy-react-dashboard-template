import { Box } from '@mui/material'
import React from 'react'
import ActionFilter from '../../../Components/ActionFilter/ActionFilter'
import MainCard from '../../../Components/MainCard/MainCard'
import RecentOrderTable from './RecentOrderTable/RecentOrderTable'

const LayerFour = () => {
  return (
  <Box mt={3}>
    <MainCard title='Recent orders' content={<RecentOrderTable />} />
  </Box>
  )
}

export default LayerFour