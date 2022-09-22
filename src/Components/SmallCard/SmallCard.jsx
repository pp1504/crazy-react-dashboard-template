import React from 'react'
import { Box, Stack, Avatar ,Chip} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SmallCard = ({title,value,range,icon,color,avatarColor}) => {
  
  return (
    <Box >
     
          <Box  sx={{backgroundColor:'#FFFFFF',borderRadius:'0.7rem'}} >
            <Stack 
            direction='row'
            justifyContent="center"
          alignItems='center' spacing={0}
         
            >
              <CardContent sx={{ flexGrow: '1' }}>
                <Typography variant='h6' sx={{ fontSize: 13,fontFamily:'Manrope' }} color="text.secondary" gutterBottom>
                 {title}
                </Typography>

                <Typography sx={{ fontSize: 28,fontFamily:'Manrope',fontWeight:'600'}} color="text.primary" >
                  {value}
                </Typography>
                <Box mt={1}>
                <Chip label={range} size='small' sx={{backgroundColor:color,color:'white',fontSize:11,fontWeight:600}}/>
                </Box>
           
              </CardContent>

              <Box sx={{paddingRight:'1rem'}}> 
              <Avatar sx={{ bgcolor: avatarColor,width:'60px',height:'60px' }}>
                {icon}
              </Avatar>
              </Box>
            </Stack>
          </Box>

         
    </Box>
  )
}

export default SmallCard