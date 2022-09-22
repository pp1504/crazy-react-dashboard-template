import { Box, Button, Grid, IconButton, Typography ,Divider, List, ListItem,ListItemAvatar,ListItemText, Stack} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DrawerBox from './DrawerBox';
import OrderDetails from './OrderDetails';


const DrawerContent = ({item,onClose}) => {

 
  return (
   <Box >
    <Box p={5} sx={{display:'flex'}}>
    <Box sx={{flexGrow:1}}>
            <Typography variant='h5' >Order Details</Typography>
        </Box>
        <IconButton  onClick={onClose}>
            <CloseIcon />
        </IconButton>
    </Box>
        

        <Box pl={5} pr={5}>
  <Grid container 
  spacing={{ xs: 1, md: 1 }} 
  columns={{ xs: 6, sm: 8, md: 6 }}
  >
 
 <Grid item xs={6} sm={8} md={6}  >
 <DrawerBox
  title='Customer Details'
   backgroundcolor={'#ffcdd2'}
    column1={item.customer.name}
    column2={item.customer.email}
    column3={item.customer.phoneno}
    />

 </Grid>
 <Grid item xs={6} sm={8} md={6} >
 <DrawerBox title='Shipping Details' backgroundcolor={'#bbdefb'} item={item}
 
 column1={item.shipping.street}
 column2={item.shipping.doorno}
 column3={item.shipping.province}/>
 </Grid>

 <Grid item xs={6} sm={8} md={6} >
    <Box sx={{backgroundColor:'#eeeeee',borderRadius:5,textAlign:'center'}} p={2}>
        <Typography variant='h6' gutterBottom>Order Details</Typography>
        <OrderDetails orderData={item} />
    </Box>
 </Grid>

</Grid>
<Box>
<Stack mt={3}>
    <Button variant='outlined' color='error' onClick={onClose}>Close</Button>
</Stack>
</Box>

        </Box>
   </Box>
  )
}

export default DrawerContent