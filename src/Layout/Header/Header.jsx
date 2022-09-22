import * as React from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ElevationScroll from './Elevation';
import SideBar from '../SideBar/SideBar';
import Drawer from '@mui/material/Drawer';
import ProfileSection from '../../Components/ProfileSection/ProfileSection';
import NotificationSection from '../../Components/NotificationSection/NotificationSection';
import SettingsSection from '../../Components/SettingsSection/SettingsSection';
import SearchFieldSection from '../../Components/SearchFieldSection/SearchFieldSection';
import MainContent from '../MainContent/MainContent';
import MuiAppBar from '@mui/material/AppBar';
import {CssBaseline } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {  Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText,  } from '@mui/material'

import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useState ,useEffect} from 'react';

import {  Link } from 'react-router-dom';


const  drawerWidth=240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
 
    width:'100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: 0,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function Header(props) {

const { window } = props;
const [open, setOpen] = React.useState(true);
const handleDrawerToggle = () => {
    setOpen(!open);
  };

const container = window !== undefined ? () => window().document.body : undefined;
const theme = useTheme();
const isGreaterThanSmallBreakpoint = useMediaQuery(
  theme.breakpoints.up("md")
);




 return (
  <Box sx={{ display: {xs:'block',sm:(open ? 'flex':'block') },}}>
     <CssBaseline />
      <ElevationScroll {...props} >
        <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:'#ef5350'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr:3 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: '800',
              }}
            >
              Crazy
            </Typography>
         
            <Box>
              <SearchFieldSection />
            </Box>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'flex', sm: 'flex' } }}>
              <Box>
                <NotificationSection />
              </Box>
              <Box>
                <SettingsSection/>
              </Box>
             <Box>
                <ProfileSection />
             </Box>
            </Box>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      
     
      <Drawer
         container={container}
         variant={isGreaterThanSmallBreakpoint ? "persistent" : "temporary"}
        open={isGreaterThanSmallBreakpoint ? open : !open}
          onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,display:'flex',
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box  sx={{width:drawerWidth,height:'100%'}}  ml={1}>
      <SideBar />  
      
    </Box>
      </Drawer>
      
<Box  sx={{width:'100%'}}>
   <Main open={open} >
        <DrawerHeader />
        <MainContent />
      </Main>
      </Box>
  </Box>
  
  );
}
