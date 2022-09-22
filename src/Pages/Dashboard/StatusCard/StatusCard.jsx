import React from 'react'
import { Box, Stack, Avatar } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SmallCard from '../../../Components/SmallCard/SmallCard';

const StatusCard = () => {

  return (
    <Box mt={2} >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="flex-start"
        alignItems='stretch'
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent="flex-start"
          alignItems='stretch'
          spacing={2}
          sx={{ width: { sm: '100%', lg: '50%' } }}
        >
          <Box sx={{ width: { xs: '100%', md: '100%'} }} >
          <SmallCard title='Total Orders' 
          value='22,000' 
          range='+12.3%' 
          avatarColor='#e3f2fd'
          icon={<AssignmentIcon  color='info'/>}
          color='#a2cf6e'
          />
              
          </Box>

          <Box sx={{ width: { xs: '100%', md: '100%'} }} >
          <SmallCard title='Total Sales' 
          value='20,000' 
          range='-2.3%' 
          color='#ff5252'
          avatarColor='#e8f5e9'
          icon={<MonetizationOnIcon  color='success'/>} />
              
          </Box>
        </Stack>


        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent="flex-start"
          alignItems='stretch'
          spacing={2}
          sx={{ width: { sm: '100%', lg: '50%' } }}
        >
          <Box sx={{ width: { xs: '100%', md: '100%'} }} >
          <SmallCard 
          title='Total Page Views'
          value='80,598' 
          range='+50.9%' 
          color='#a2cf6e'
          avatarColor='#f3e5f5'
          icon={<AssignmentIcon color='secondary' />}
          />
              
          </Box>
          <Box sx={{ width: { xs: '100%', md: '100%'} }} >
          <SmallCard 
          title='Total Users'
           value='10,000' 
           range='+30.78%' 
           color='#a2cf6e'
           avatarColor='#fbe9e7'
           icon={<AssignmentIcon color='warning' />} />
              
          </Box>
        </Stack>



      </Stack>
    </Box>
  )
}

export default StatusCard