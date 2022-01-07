import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import { Grid } from '@mui/material';

import { useLocation } from 'react-router';
import TopBar from '../components/top-navigation-bar';
import Notification from '../components/notification';

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100vh",
            backgroundColor : "#f4f4f4"
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            },
            // toolbar: theme.mixins.toolbar
        }
})

const notifications = [
    {
        message : "You have a new notification",
        read : true
    },{
        message : "Your payment from ABC has been received",
        read : true
    },{
        message : "You schedule for the month of July has been updated.",
        read : false 
    }
]

function PushNotifications() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
        <SideDrawer/>
        <Grid container>
        <div>
            <TopBar title = {location.pathname.replace(/[^a-zA-Z ]/g, " ").toUpperCase()}/>
            <Grid container rowGap = {5} width = "95%" ml = "4vw" mr = {4} mt = {12} columnGap={5} mb = {6}  >
                {
                    notifications.map(notification => (
                        <Grid item md = {10} width = "80%">
                            <Notification notification = {notification}/> 
                        </Grid>
                    ))
                }
            </Grid>
        </div>

        </Grid>
    </div>
    );
}

export default PushNotifications;