import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import TopBar from '../components/top-navigation-bar';
import {Grid} from '@mui/material'
import { useLocation } from 'react-router';

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100vh"
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            },
            // toolbar: theme.mixins.toolbar
        }
})

function Cancelled() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <Grid container>
                <Grid item sm = {12}>
                    <TopBar title = {location.pathname.replace('/', '').toUpperCase()}/>
                </Grid>
            </Grid>        
            
        </div>
    );
}

export default Cancelled;