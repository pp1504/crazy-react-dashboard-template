import { Box, Button, Typography, Stack, IconButton } from '@mui/material'
import React from 'react'
import OrdersTable from '../../Pages/Orders/Table/OrdersTable'
import MainTable from '../MainTable/MainTable'
import MainTitle from '../MainTitle/MainTitle'
import TimeSpanFillter from '../TimeSpanFillter/TimeSpanFilter'
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Others = () => {
    return (
        <Box>
            <MainTitle text={'Other Components'} />

            <Box mt={3}>
                <Typography> Basic Table </Typography>
                <Box mt={2}>
                    <MainTable pagination={'false'} pageRows={6} />
                </Box>
            </Box>

            <Box mt={3}>
                <Typography> Table with Pagination and Drawer Component</Typography>
                <Box mt={2}>
                    <OrdersTable />
                </Box>

            </Box>

            <Box mt={3}>
                <Typography>TimeSpan Filter</Typography>
                <Box mt={2}>
                    <TimeSpanFillter />
                </Box>

            </Box>

            <Box mt={3}>
                <Typography>Buttons</Typography>
                <Box mt={2}>
                    <Stack spacing={2} direction="row">
                        <Button variant="text" color='error'>Text</Button>
                        <Button variant="contained" color='error'>Contained</Button>
                        <Button variant="outlined" color='error'>Outlined</Button>
                    </Stack>
                </Box>

            </Box>

            <Box mt={3}>
                <Typography>Icon Buttons</Typography>
                <Box mt={2}>
                    <Stack spacing={2} direction="row">
                        <IconButton aria-label="delete"  color="warning">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Stack>
                </Box>

            </Box>
        </Box>
    )
}

export default Others