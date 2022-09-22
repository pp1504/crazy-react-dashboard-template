import React from 'react'
import MainCard from '../../../../Components/MainCard/MainCard'
import WebsiteChart from './Chart/WebsiteChart'

const Websites = () => {
  return (
   <MainCard title='Website stats' content={<WebsiteChart />}/>
  )
}

export default Websites