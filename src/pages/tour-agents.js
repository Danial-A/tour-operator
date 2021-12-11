import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import { Grid } from '@mui/material';

import { useLocation } from 'react-router';
import TopBar from '../components/top-navigation-bar';
import AgentCard from '../components/agentCard';

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
            }
        }
})

const agents = [
    {
        name : "BLUE STARS TOURS AND TRAVELS",
        address : "#03- 2 1 , S ULTHANPET, PALAKKAD, KERALA, INDIA 678666",
        phone : [
            "+91-9453648354",
            "+91-9451312112"
        ],
        email : "INFO@BLUESTARTOURS.COM",
        code : "ABCD12345"
    },{
        name : "BLUE STARS TOURS AND TRAVELS",
        address : "#03- 2 1 , S ULTHANPET, PALAKKAD, KERALA, INDIA 678666",
        phone : [
            "+91-9453648354",
            "+91-9451312112"
        ],
        email : "INFO@BLUESTARTOURS.COM",
        code : "ABCD12345"
    }
]

function TourAgents() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
           <div>
                <TopBar title = {location.pathname.replace(/[^a-zA-Z ]/g, " ").toUpperCase()}/>
                <Grid container rowSpacing = {6} width = "95%" ml = {6} mt = {4}>
                    {
                        agents.map((agent, index)=>(
                            <Grid item md = {5} key = {index}
                            sx = {{
                                bgcolor : "white",
                                paddingTop : "10px !important ",
                                borderRadius : "30px",
                                padding : "10px 10px",
                                boxShadow : "5px 2px 10px grey",
                                transition: "all .2s ease-in-out",
                                "&:hover" : {
                                    transform : "scale(1.1)",
                                    cursor : "pointer"
                                }
                                }}
                            >
                                <AgentCard agent = {agent}/>
                            </Grid>
                        ))
                    }
                </Grid>
           </div>
        </div>
    );
}

export default TourAgents;