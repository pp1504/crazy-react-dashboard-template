
import { Box, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useState ,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {  Link } from 'react-router-dom';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LayersIcon from '@mui/icons-material/Layers';
import StormIcon from '@mui/icons-material/Storm';
import BarChartIcon from '@mui/icons-material/BarChart';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

const drawerWidth=230;
const SideBar = () => {



    const storedValueAsNumber = Number(localStorage.getItem('selected'));
    const [selected, setSelected] = useState(
      Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
    );
    
    useEffect(() => {
      localStorage.setItem('selected', String(selected));
    }, [selected]);
    
    const Navigation=[
        {
            title:'Dashboard',
            icon:<DashboardIcon  />,
            to:'/'
        },
        {
            title:'Orders',
            icon:<SummarizeIcon  />,
            to:'/orders'
        },
        {
          title:'Typography',
          icon:<FormatSizeIcon />,
          to:'/typography'
      },
      {
        title:'Icons',
        icon:<StormIcon />,
        to:'/icons'
    },
    {
      title:'Colors',
      icon:<ColorLensIcon />,
      to:'/colors'
  },
  {
    title:'Charts',
    icon:<BarChartIcon />,
    to:'/charts'
},
{
  title:'Sample Page',
  icon:<LayersIcon />,
  to:'/samplepage'
},
{
  title:'Others',
  icon:<DocumentScannerIcon />,
  to:'/others'
},

    
    ]
  

const Nav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 10,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 15,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
   

  });

    return (
      <Box  sx={{width:drawerWidth,height:'100%'}}  ml={0}>
      <Nav component='nav'>
      <List>
      
        <Box mt={1}>
                {Navigation.map((item, index) => (
                
                 <Link to={item.to} style={{textDecoration:'none',color:'black'}}>
                    <ListItem key={index}  
                   disablePadding 
                   sx={{':hover':{
                    backgroundColor:'none',opacity:'0.5'},}} 
                    >
                      
                        <ListItemButton  
                            to={item.to}
                        onClick={()=>setSelected(index)}
                           
                        >
                            <ListItemIcon >
                               <Icon sx={{ color:(selected===index ? '#ef5350':'#212121')}}>{item.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText >
                                <Typography 
                                variant='h6'
                                 sx={{
                                  color:(selected===index ? '#ef5350':'#212121'),
                                 fontSize:'16px',
                                fontFamily:'Manrope',
                                }}
                                  mt={1}
                                 >
                                    {item.title}</Typography>
                                </ListItemText>
                        </ListItemButton>
                       
                    </ListItem>
                

                    </Link>
                       
                ))}
                </Box>
            </List>

            </Nav>
          
    </Box>
    )
}

export default SideBar
