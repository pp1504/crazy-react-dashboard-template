import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductsChart from '../../Pages/Dashboard/LayerThree/Products/Chart/ProductsChart'

import WebsiteChart from '../../Pages/Dashboard/LayerThree/Websites/Chart/WebsiteChart'
import RevenueCharts from '../../Pages/Dashboard/RevenuSection/Charts/RevenueChart'
import WeeklySalesChart from '../../Pages/Dashboard/WeeklySalesSection/Charts/WeeklySalesChart'
import MainTitle from '../MainTitle/MainTitle'

const MainCharts = () => {
    const charts = [<RevenueCharts />, <WeeklySalesChart />, <ProductsChart />, <WebsiteChart />]
    return (
        <Box>
            <MainTitle text={'Main Charts'} />
            <Box>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                    charts.map((charts,index)=>
                   

                    <Grid item xs={4} sm={8} md={6} key={index}>
                       {charts}
                    </Grid>
                   
            

                    )
                }
                  </Grid>



            </Box>
        </Box>
    )
}

export default MainCharts