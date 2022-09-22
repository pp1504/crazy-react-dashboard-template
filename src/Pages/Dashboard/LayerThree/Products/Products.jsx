import { Box } from '@mui/material'
import React from 'react'
import MainCard from '../../../../Components/MainCard/MainCard'
import ProductsChart from './Chart/ProductsChart'

const Products = () => {
  return (
   
      <MainCard title='Product stats'  content={<ProductsChart />}/>
   
    
  )
}

export default Products