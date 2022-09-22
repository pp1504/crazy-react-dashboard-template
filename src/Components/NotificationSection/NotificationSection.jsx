import React from 'react'
import {
    Badge, IconButton, Avatar, Box, Typography,CardContent,
    Divider, Chip, List, ListItemAvatar, ListItemText, ListItemButton,
    Tooltip
} from '@mui/material';

import Menu from '@mui/material/Menu';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BallImg from './ballimg.jpg';
import BoyImg from './boyprofileimg.jpg'

const NotificationSection = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isNotificationOpen = Boolean(anchorEl);
    const [tick, setTick] = React.useState(false);



    const handleNotificationMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);

    };

    const handleTickIcon = () => {
        setTick(true);
    }

    const NotificationContent = [
        {
            image: BallImg,
            content: 'Your Order is Placed',
            subcontent: 'waiting for shipping',
            time: 'less than a minute ago'
        },
        {
            image: BoyImg,
            content: 'Sylynkong',
            subcontent: 'answered to your comment',
            time: '2 minute ago'
        },
    ]

    const NotificationContentOld = [
        {
            image: BoyImg,
            content: 'Sylynkong',
            subcontent: 'answered to your comment',
            time: '2 hours ago'
        },
        {
            image: BallImg,
            content: 'Your Order is Placed',
            subcontent: 'waiting for shipping',
            time: '2 days ago'
        },

    ]

    const menuId = 'primary-search-account-menu';
    const renderMenu = (

        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={isNotificationOpen}
            onClose={handleMenuClose}

        >
            <CardContent>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexGrow: '1' }}>
                        <Typography variant='h6' sx={{ fontSize: '17px', fontWeight: '600', color: '#212121' }}>
                            Notifications
                        </Typography>

                        <Typography sx={{ fontSize: '12px', color: '#bdbdbd' }}
                        >
                           You have 2 unread messages
                        </Typography>
                    </Box>

                    <Box >
                        <Tooltip title="Mark all as read">
                            <IconButton onClick={handleTickIcon}>
                                {tick == false ? <DoneAllIcon color="success" fontSize="small" /> : null}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </CardContent>

            <Divider>
                <Chip label="New" size="small"  />
            </Divider>


            <List >
                {NotificationContent.map((items, index) =>
                    <>
                        <ListItemButton
                            alignItems="flex-start"
                            key={index}
                            onClick={handleMenuClose}
                            sx={{ backgroundColor: (tick == false ? '#ffebee' : '#ffffff') }}>

                            <ListItemAvatar>
                                <Avatar src={items.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <><Typography
                                        sx={{
                                            display: 'inline',
                                            color: '#212121', fontSize: '16px', fontWeight: '400'
                                        }}
                                        component="div"


                                    >
                                        {items.content} -
                                    </Typography>
                                        <Typography
                                            sx={{
                                                display: 'inline',
                                                color: '#9e9e9e', fontSize: '14px', fontWeight: '400'
                                            }}
                                            component="div"


                                        >
                                             &nbsp;{items.subcontent}
                                        </Typography>
                                    </>}
                                secondary={

                                    <Typography
                                        sx={{ display: 'block' }}
                                        component="span"
                                        variant="body2"
                                        color="#bdbdbd"
                                    >
                                        {items.time}
                                    </Typography>

                                }
                            />
                        </ListItemButton>
                        <Box mt={0.1} />
                    </>
                )}

            </List>


            <Divider>
                <Chip label="Before That" size="small" />
            </Divider>
            <List>
                {NotificationContentOld.map((items, index) =>

                    <ListItemButton alignItems="flex-start" key={index} onClick={handleMenuClose}>
                        <ListItemAvatar>
                            <Avatar src={items.image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <><Typography
                                    sx={{
                                        display: 'inline',
                                        color: '#212121', fontSize: '16px', fontWeight: '400'
                                    }}
                                    component="div"


                                >
                                    {items.content} -
                                </Typography>
                                    <Typography
                                        sx={{
                                            display: 'inline',
                                            color: '#9e9e9e', fontSize: '14px', fontWeight: '400'
                                        }}
                                        component="div"


                                    >
                                         &nbsp;{items.subcontent}
                                    </Typography>
                                </>}
                            secondary={

                                <Typography
                                    sx={{ display: 'block' }}
                                    component="span"
                                    variant="body2"
                                    color="#bdbdbd"
                                >
                                    {items.time}
                                </Typography>

                            }
                        />
                    </ListItemButton>

                )}

            </List>

        </Menu>

    );

    return (
        <Box mt={1}>
            <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleNotificationMenuOpen}
            >
                <Badge badgeContent={17} color="info">
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            <Box >
                {renderMenu}
            </Box>
        </Box>

    )
}

export default NotificationSection