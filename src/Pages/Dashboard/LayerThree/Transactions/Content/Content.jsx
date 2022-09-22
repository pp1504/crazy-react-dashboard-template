import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Content() {
  const mainStyle = {
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Manrope',
    color: '#000000',
  };

  const subStyle = {
    fontSize: '12px',
    fontWeight: '400',
    fontFamily: 'Manrope',
    color: '#bdbdbd',
  };
  return (
    <Box  >

            <List  >
              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                
                sx={{marginTop:'1rem'}}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: '#f3e5f5' }} variant="rounded">
                      <CreditCardIcon sx={{ color: '#ab47bc' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant='h6' sx={mainStyle}>
                        Paybal
                      </Typography>
                    }
                    secondary={
                      <Typography sx={subStyle}>
                        Received 
                      </Typography>
                    }
                  />
                </ListItem>


                <Stack direction='row' 
               
                >
                  <Typography variant='h6' sx={mainStyle}>+$1,234</Typography>
              

                    <KeyboardArrowUpIcon sx={{ color: '#aeea00' }} />
                 

                </Stack>


              </Stack>


              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={3}

              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: '#f9fbe7' }} variant="rounded">
                      <AccountBalanceWalletIcon sx={{ color: '#cddc39' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant='h6' sx={mainStyle}>
                          Wallet
                      </Typography>
                    }
                    secondary={
                      <Typography sx={subStyle}>
                          Mac'D
                      </Typography>
                    }
                  />
                </ListItem>


                <Stack direction='row'>
                  <Typography variant='h6' sx={mainStyle}>+$2,234</Typography>
                  

                    <KeyboardArrowUpIcon sx={{ color: '#aeea00' }} />
                  

                </Stack>


              </Stack>


              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={3}

              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: '#e3f2fd' }} variant="rounded">
                      <TrendingUpIcon sx={{ color: '#1e88e5' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant='h6' sx={mainStyle}>
                        Transfer
                      </Typography>
                    }
                    secondary={
                      <Typography sx={subStyle}>
                        Refund
                      </Typography>
                    }
                  />
                </ListItem>


                <Stack direction='row'>
                  <Typography variant='h6' sx={mainStyle}>-$234</Typography>
                 

                    <KeyboardArrowDownIcon sx={{ color: '#f50057' }} />
                  

                </Stack>


              </Stack>


            </List>
        
  
    </Box>
  );
}
