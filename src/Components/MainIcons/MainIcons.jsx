import React from 'react'
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LayersIcon from '@mui/icons-material/Layers';
import StormIcon from '@mui/icons-material/Storm';
import BarChartIcon from '@mui/icons-material/BarChart';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box, Stack, Typography } from '@mui/material';
import MainTitle from '../MainTitle/MainTitle';

const MainIcons = () => {

    return (
        <Box>
            <MainTitle text={'Icons'} />

            <Box mt={3} sx={{ width: '100%', textAlign: 'left', backgroundColor: '#ffffff', borderRadius: 5 }} p={5}>
                <Typography>Normal icons</Typography>
                <Stack direction={{xs:'column',md:'row'}} spacing={3} m={2}>
                    <Stack direction='row' spacing={3}>
                        <FormatSizeIcon />
                        <ColorLensIcon />
                        <LayersIcon />
                        <StormIcon />
                        <BarChartIcon />
                        <DocumentScannerIcon />
                        <DashboardIcon />
                    </Stack>

                <Stack direction='row' spacing={3}>
                <SummarizeIcon />
                    <AssignmentIcon />
                    <LocalOfferIcon />
                    <ShoppingBagIcon />
                    <MonetizationOnIcon />
                 </Stack>

                    
                </Stack>

                <Typography>Colored icons</Typography>
                <Stack direction='row' spacing={3} m={2}>

                    <ColorLensIcon color='info' />
                    <ColorLensIcon color='primary' />
                    <ColorLensIcon color='warning' />
                    <ColorLensIcon color='error' />
                    <ColorLensIcon color='success' />
                    <ColorLensIcon color='secondary' />
                    <ColorLensIcon color='action' />
                </Stack>

                <Typography>Sized icons</Typography>
                <Stack direction='row' spacing={3} m={2}>


                    <FormatSizeIcon fontSize='small' />
                    <FormatSizeIcon />
                    <FormatSizeIcon fontSize='large' />

                </Stack>

            </Box>

        </Box>

    )
}

export default MainIcons