import { Box } from '@mui/material'
import React from 'react'
import MainTable from '../../../../Components/MainTable/MainTable'

const RecentOrderTable = () => {
  return (
    <Box mt={2}>
        <MainTable pagination={'false'} pageRows={6}/>
    </Box>
  )
}

export default RecentOrderTable