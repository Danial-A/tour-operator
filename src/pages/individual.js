import React from 'react'
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import { useLocation } from 'react-router';
import {Grid} from '@mui/material'
import TopBar from '../components/top-navigation-bar';
import IndividualCard from '../components/individualCard';

//css
import '../css/main.css'

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100%",
            backgroundColor : "#f4f4f4",
            // width : '100%'
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            }
        }
        
})

const Individual_items = [
    {
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },{
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },{
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },{
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },
    {
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },{
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },{
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },{
        name : "ABDUL AZIZ",
        contact : '09463432425',
        password : "ABCD123456",
        email : "AZIZ1972@gmail.com",
        image : "user1.jpg"
    },

]

function Individual() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <div>
                <TopBar title = {location.pathname.replace('/', '').toUpperCase()}/>
                    <Grid container rowSpacing = {6} width = "95%" ml = {6} mt = {4}>
                        {
                            Individual_items.map((i, index) => (
                                <Grid item  md = {5} ml = {6}  mb = {6} key = {index} 
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
                                        }}>
                                   <IndividualCard info = {i}/>
                                </Grid>
                            ))
                        }
                     
                    </Grid>
            </div>
        </div>
    )
}

export default Individual
