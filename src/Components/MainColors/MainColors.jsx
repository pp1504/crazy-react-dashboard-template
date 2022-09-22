import { Box } from '@mui/material'
import React from 'react'
import MainTitle from '../MainTitle/MainTitle'
import ColorBox from './ColorBox'

const MainColors = () => {
    const primaryColors=['#ffebee','#ffcdd2','#ef5350','#b71c1c']
    const secondaryColors=['#e3f2fd','#bbdefb','#1e88e5','#0d47a1']
    const  grayColors=['#f5f5f5','#9e9e9e','#212121']
    const successColors=['#f1f8e9','#aed581','#8bc34a','#33691e']
    const purpleColors=['#f3e5f5','#ba68c8','#9c27b0','#4a148c']
    const amberColors=['#fff8e1','#ffd54f','#ffb300','#ff6f00']
    const otherColors=['#ffd740','#69f0ae','#cddc39','#00b8d4','#81d4fa','#fce4ec','#f48fb1']
  return (
    <Box>
        <MainTitle text={'Colors'}/>
        <Box mt={3}>
           <ColorBox item={primaryColors} title='Primary Colors'/> 
           <ColorBox item={secondaryColors} title='Secondary Colors'/>
           <ColorBox item={successColors} title='Success Colors'/>
           <ColorBox item={purpleColors} title='Purple Colors'/>
           <ColorBox item={amberColors} title='Amber Colors'/>
           <ColorBox item={grayColors} title='Gray Colors'/>
           <ColorBox item={otherColors} title='Other Colors'/>
        </Box>
    </Box>
  )
}

export default MainColors