import React, { useState } from 'react'
import MainTable from '../../../Components/MainTable/MainTable'
import OrderDrawer from '../OrderDrawer/OrderDrawer';
import { Box } from '@mui/material';



const OrdersTable = () => {

const [active,setActive]=useState(false);
const [item,setItemdata]=useState({});

const handleClose = () => {
    setActive(false);
  };
function handleIdClick(order) {
        setActive(true);
        setItemdata(order);
      }
    
  return (
    <div>
           <MainTable pagination={'true'} pageRows={10}  onIdClick={handleIdClick}/>

           <OrderDrawer active={active}  item={item} onIdClick={handleIdClick} onIdClose={handleClose}/>
        
           
           
           
    </div>
 
  )
}

export default OrdersTable