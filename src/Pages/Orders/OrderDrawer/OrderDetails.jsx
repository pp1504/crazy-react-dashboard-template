import { Box, Divider, List, ListItem, Table, TableCell, TableRow } from '@mui/material'
import React from 'react'

const OrderDetails = ({ orderData }) => {

    return (
        <Box mt={2} p={{xs:0,sm:2}}>
            <Table >
                {orderData.items.map((orderdata, index) =>
                    <TableRow key={index}  >
                        <TableCell>{orderdata.product}</TableCell>
                        <TableCell align='right'>x {orderdata.quantity}</TableCell>
                        <TableCell align='right'>{orderdata.price}$</TableCell>
                    </TableRow>
                )}
           
          
        
                <TableRow sx={{backgroundColor:'#bdbdbd'}}>
                    <TableCell>Subtotal</TableCell>
                    <TableCell />
                    <TableCell align='right'>{orderData.subtotalprice}$</TableCell>
                </TableRow>
              
                <TableRow>
                    <TableCell>Totaltax</TableCell>
                    <TableCell />
                    <TableCell align='right'>{orderData.totaltax}$</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Discount</TableCell>
                    <TableCell />
                    <TableCell align='right'>{orderData.discount}$</TableCell>
                </TableRow>
                <TableRow sx={{color:'red'}}>
                    <TableCell>Refund</TableCell>
                     <TableCell />
                    <TableCell align='right'>{orderData.refund}$</TableCell>
                </TableRow>
                <TableRow sx={{backgroundColor:'#bdbdbd'}}>
                    <TableCell>Total</TableCell>
                     <TableCell />
                    <TableCell align='right'>{orderData.totalprice}$</TableCell>
                </TableRow>
                
            </Table>
        </Box>
    )
}

export default OrderDetails