import React from 'react'
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer';
import { Grid, Typography } from '@mui/material';

//css
import "../css/dashboard-main.css"
import "../css/card.css"

import TopBar from '../components/top-navigation-bar';
import { useLocation } from 'react-router';


const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            backgroundColor : "#f4f4f4",
            height : "100vh"
            },
            iconSize : {
                fontSize : 40
            }
        }
})

const card_first_row = [ 
    {
    text : "TOTAL INDIVIDUAL",
    num : 30
},
{
    text : "TOTAL AGENTS",
    num : 21
},
{
    text : "TOTAL LISTINGS",
    num : 65
},
{
    text : "TOTAL BOOKINGS",
    num : 125
}
]

const card_second_row = [ 
    {
    text : "TOTAL COMPLETED",
    num : 105
},
{
    text : "CANCELLED",
    num : 20
},
{
    text : "LOAN APPROVED",
    num : 70
},
]

const card_third_row = [ 
    {
    text : "TOTAL AMOUNT",
    num : "300,000"
    }
]


function MainPage() {
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
                            <div className = "main-page-content" style = {{width : "100%"}} >
                                <Grid item sm = {12} width = "100%">
                                    <div className = "card-wrapper">
                                        {
                                            card_first_row.map((card, index)=> (
                                            
                                            
                                                    <div className = "card-main" >
                                                        <Typography >{card.text}</Typography> 
                                                        <Typography className = "card-num" variant = "h2">{card.num}</Typography>           
                                                    </div>
                                            
                                                
                                            ))
                                        }
                                        </div>
                                </Grid>
                                    
                                    <Grid item sm = {12} width = "100%" mt = {6}>
                                        <div className = "card-wrapper">
                                            {
                                                card_second_row.map((card, index)=> (
                                                
                                                
                                                        <div className = "card-main" >
                                                            <Typography >{card.text}</Typography> 
                                                            <Typography className = "card-num" variant = "h2">{card.num}</Typography>           
                                                        </div>
                                                
                                                    
                                                ))
                                            }
                                        </div>
                                    </Grid>
                                    <Grid item sm = {12} mt = {6} mb = {6}>
                                        <div className = "card-wrapper">
                                                {
                                                    card_third_row.map((card, index)=> (
                                                    
                                                    
                                                            <div className = "card-main" >
                                                                <Typography >{card.text}</Typography> 
                                                                <Typography className = "card-num" variant = "h2">{card.num}</Typography>           
                                                            </div>
                                                    
                                                        
                                                    ))
                                                }
                                        </div>
                                    </Grid>
                                    </div>
                                </Grid>    
                         
   
                    </Grid>
                </Grid>
            
        </div>
    )
}

export default MainPage
