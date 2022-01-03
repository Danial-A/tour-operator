import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import TopBar from '../components/top-navigation-bar';
import {Grid} from '@mui/material'
import { useLocation } from 'react-router';
import CompleterToursCard from '../components/tourCompleted';

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100%",
            backgroundColor : "#f4f4f4"
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            }
        }
})

const cancelledTours = [
    {
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        card : {
            name : "Dubai",
            price : "40000",
            days : "4",
            nights : "3",
            image :"dubai.jpg"
        }
    },
    {
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        card : {
            name : "London",
            price : "40000",
            days : "4",
            nights : "3",
            image : 'london.jpeg'

        }
    },{
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        card : {
            name : "Singapore",
            price : "40000",
            days : "4",
            nights : "3",
            image : 'singapore.jpg'

        }
    },{
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        card : {
            name : "OOTY",
            price : "40000",
            days : "4",
            nights : "3",
            image : 'ooty.jpg'

        }
    },{
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        card : {
            name : "Delhi",
            price : "40000",
            days : "4",
            nights : "3",
            image : 'delhi.jpg'

        }
    },{
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        card : {
            name : "Bangalore",
            price : "40000",
            days : "4",
            nights : "3",
            image : 'bangalore.jpg'

        }
    }
]

function Cancelled() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <Grid container>
            <div>
            <TopBar title = {location.pathname.replace(/[^a-zA-Z ]/g, " ").toUpperCase()}/>
                <Grid container rowGap = {5} width = "95%" ml = {4} mr = {4} mt = {4} columnGap={5} mb = {6}>
                    {
                        cancelledTours.map((card, index)=>(
                            <Grid md = {5.5} key = {index}>
                                <CompleterToursCard card = {card}/>
                            </Grid>
                        ))
                    }
                </Grid>
             </div>

            </Grid>        
            
        </div>
    );
}

export default Cancelled;