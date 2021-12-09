import React from 'react'
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import { useLocation } from 'react-router';
import {Grid} from '@mui/material'
import TopBar from '../components/top-navigation-bar';

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100vh"
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            }
        }
})

function Individual() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <Grid container>
                <Grid item sm = {12}>
                    <TopBar title = {location.pathname.replace('/', '').toUpperCase()}/>
                </Grid>
                <Grid item sm = {12}>
                    <Grid container>
                        <Grid item md = {6}>

                        </Grid>
                        <Grid item md = {6}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Individual
