import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function Notification({notification}) {
    return (
        <Grid container sx = {{bgcolor : notification.read ? null : "crimson", padding : "0", borderRadius : "25px 10px 10px 25px",boxShadow : "5px 2px 7px grey", transition: "all .2s ease-in-out",
            "&:hover" : {
                cursor : "pointer",
                boxShadow : "5px 2px 10px crimson",
                transform : "scale(1.03)",
            }
        }}>
            <Grid item md = {1} textAlign= "center">
                <Avatar sx = {{height : "50px", width : "50px", bgcolor : notification.read ? "crimson" : "grey"}}>
                    <PriorityHighIcon/>
                </Avatar>
            </Grid>
            <Grid item md = {7} bgcolor = {notification.read ? null : "crimson"}>
                <Typography variant='body1' pt = {1} color={notification.read ? null : "white"}>
                    {notification.message}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Notification;