import React from 'react'
import { IconButton,Box } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';


const SettingsSection = () => {
  return (
    <Box mt={1}>
        <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <SettingsIcon />
              </IconButton>
    </Box>
  )
}

export default SettingsSection