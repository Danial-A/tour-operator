import React from 'react';
import '../css/topbar.css'
import { Grid, Typography , Stack, IconButton, Avatar} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

function TopBar() {
    return (
        <Grid container mt = {4} mx = {6}>
        <Grid item md = {6}>
            <Typography variant = "h3">
                Dashboard
            </Typography>
        </Grid>
        <Grid item md = {6}>
            <Stack direction = "row-reverse" spacing = {2}>
            <IconButton
                size = "large"
            >
                <Avatar alt = "user-profile-img" sx = {{bgcolor : "red"}}>DA</Avatar>
            </IconButton>
                <IconButton 
                    size = "large"
                    color = "warning"
                >
                    <NotificationsIcon style = {{fontSize : 40}}/>
                </IconButton>
                <IconButton 
                    size = "large"
                    color = "warning"
                >
                    <MessageIcon style = {{fontSize : 40}}/>
                </IconButton>
                
            </Stack>
        </Grid>
    </Grid>
   
    );
};

export default TopBar;