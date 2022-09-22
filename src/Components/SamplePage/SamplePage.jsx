import { Box } from '@mui/material'
import React from 'react'
import MainCard from '../MainCard/MainCard'
import MainTitle from '../MainTitle/MainTitle'

const SamplePage = () => {
  return (
    <Box>
            <MainTitle text={'Sample Page'} />
            <Box mt={3}>
                <MainCard 
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
                />
            </Box>
    </Box>
  )
}

export default SamplePage