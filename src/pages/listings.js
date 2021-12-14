import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import {Grid} from '@mui/material'
import TopBar from '../components/top-navigation-bar';
import { useLocation } from 'react-router';
import ListingsCard from '../components/ListingsCard';

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

const card_content = [
    {
        name : "DUBAI",
        image : "dubai.jpg",
        price : "40,000",
        days : "4",
        nights : "3",
        agent : "BLUE STAR TOURS AND TRAVELS",
        rating : 3
    },{
        name : "SINGAPORE",
        image : "singapore.jpg",
        price : "60,000",
        days : "4",
        nights : "3",
        agent : "BLUE STAR TOURS AND TRAVELS",
        rating : 4
    },{
        name : "LONDON",
        price : "60,000",
        image : "london.jpeg",
        days : "4",
        nights : "3",
        agent : "BLUE STAR TOURS AND TRAVELS",
        rating : 3
    },{
        name : "OOTY",
        price : "10,000",
        image : "ooty.jpg",
        days : "4",
        nights : "3",
        agent : "BLUE STAR TOURS AND TRAVELS",
        rating : 3
    },{
        name : "BANGALORE",
        image : "bangalore.jpg",
        price : "20,000",
        days : "4",
        nights : "3",
        agent : "BLUE STAR TOURS AND TRAVELS",
        rating : 3
    },{
        name : "DELHI",
        image : "delhi.jpg",
        price : "15,000",
        days : "4",
        nights : "3",
        agent : "BLUE STAR TOURS AND TRAVELS",
        rating : 3
    }
]

function Listings() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <div>
            <TopBar title = {location.pathname.replace('/', '').toUpperCase()}/>
                <Grid container rowSpacing = {6} width = "95%" ml = "auto" mt = {4}>
                    {
                        card_content.map((card, index)=>(
                            <Grid item md = {4}>
                                <ListingsCard card = {card}/>
                            </Grid>
                        ))
                    }
                </Grid>
        </div>
        </div>
    );
}

export default Listings;