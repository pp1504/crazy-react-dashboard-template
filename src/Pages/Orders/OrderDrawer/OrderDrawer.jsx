import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar } from '@mui/material';
import DrawerContent from './DrawerContent';

export default function OrderDrawer({item,active,onIdClick,onIdClose}) {
  
  return (
    <div>
  
        <React.Fragment >
      
          <Drawer
            anchor='right'
            open={active}
            onClose={onIdClose}
            sx={{
           
                '& .MuiDrawer-paper': { boxSizing: 'border-box', pb:{xs:3,md:5},width:{xs:'100%',md:500} },
              }}
          >
          <Toolbar />
           <DrawerContent item={item}   onClose={onIdClose}/>
          </Drawer>
        </React.Fragment>
  
    </div>
  );
}
