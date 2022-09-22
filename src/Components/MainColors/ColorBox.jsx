import { Box,Typography ,Stack} from '@mui/material'
import React from 'react'

const ColorBox = ({ item,title }) => {
    return (
        <Box p={2}>
            <Typography variant='h6'>{title}</Typography>

            <Stack spacing={0} direction={{xs:'column',sm:'row'}} mt={2} >
            {item.map((item, index) =>
            <Box p={3} sx={{backgroundColor:item,width:'100%'}} >
                <Typography variant='h6'>{item}</Typography>
            </Box>)}
            </Stack>
        </Box>
    )
}

export default ColorBox