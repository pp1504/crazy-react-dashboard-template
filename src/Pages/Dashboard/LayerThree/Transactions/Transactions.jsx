import React from 'react'
import ActionFilter from '../../../../Components/ActionFilter/ActionFilter'
import MainCard from '../../../../Components/MainCard/MainCard'
import Content from './Content/Content'

const Transactions = () => {
  return (
   <MainCard title='Top transactions' content={<Content />} margintop={0.5}/>
  )
}

export default Transactions