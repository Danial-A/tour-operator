import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'  
import { useLocation } from 'react-router';
import TopBar from '../components/top-navigation-bar';
import ListingCardLeft from '../components/listingCardLeft';

//css
import '../css/tour.css'
import { Button, Grid, Typography } from '@mui/material';

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
            },
        paidstyles: {
            background: "linear-gradient(90deg, rgba(94,204,82,1) 0%, rgba(5,122,0,1) 100%)",
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width : '10vw'
          },
          cancelledstyles: {
            background: "linear-gradient(to right, #ed213a, #93291e)",
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width : '10vw'
          },
        }
})

const completedTours = [
    {
        names : ["Abdul Aziz", "Fathima Abdul", "Rizwan", "Fidda"],
        date : "26 Aug 2022",
        price : "160000",
        approved : true,
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
        approved : false,
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
        approved : true,
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
        approved : false,
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
        approved : true,
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
        approved : true,
        card : {
            name : "Bangalore",
            price : "40000",
            days : "4",
            nights : "3",
            image : 'bangalore.jpg'

        }
    }
]


function LoanApproval() {
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <Grid container>
            <div>
            <TopBar title = {location.pathname.replace(/[^a-zA-Z ]/g, " ").toUpperCase()}/>
                <Grid container rowGap = {5} width = "95%" ml = "4vw" mr = {4} mt = {4} columnGap={5} mb = {6} >
                    <Grid item md = {11} >
                        <Grid container sx = {{bgcolor : "white", borderRadius : "10px",boxShadow : "5px 2px 10px grey"}} padding={2}>
                            <Grid item md = {5.8} textAlign= "center">
                                <Typography variant = "h5" color = "crimson" gutterBottom = {false} fontWeight="500">
                                    Trip Details
                                </Typography>
                            </Grid>
                            <Grid item md = {2} textAlign= "center">
                                <Typography variant = "h5" color = "crimson" gutterBottom = {false} fontWeight="500">
                                    Status
                                </Typography>
                            </Grid>
                            <Grid item md = {2} textAlign= "center">
                                <Typography variant = "h5" color = "crimson" gutterBottom = {false} fontWeight="500">
                                    Change Status
                                </Typography>
                            </Grid>
                            <Grid item md = {2} textAlign= "center">
                                <Typography variant = "h5" color = "crimson" gutterBottom = {false} fontWeight="500">
                                    Transaction Number
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    {
                        completedTours.map((card, index)=>(
                            <Grid md = {11} key = {index} className = "paid-listing">
                                <Grid container bgcolor= "white">
                                    <Grid item md = {5.5}>
                                        <ListingCardLeft card = {card}/>
                                    </Grid>
                                    <Grid item md = {2}>
                                    <div style = {{height : "100%", display : "grid"}}>
                                            
                                            <div style = {{margin : "auto", paddingLeft : "50px"}}>
                                            
                                                {card.approved ? <Button variant = "contained" className= {classes.paidstyles} sx ={{ mt: 3, mb: 2 }}>
                                                    Approved
                                                </Button> : <Button variant = "contained" className= {classes.cancelledstyles} sx ={{ mt: 3, mb: 2 }}>
                                                    Cancelled
                                                </Button>}
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md = {2}>
                                    <div style = {{height : "100%", display : "grid"}}>
                                            <div style = {{margin : "auto", paddingLeft : "50px"}}>
                                                <Button variant = "contained" className= {classes.paidstyles} sx ={{ mt: 3, mb: 2 }}>
                                                    Approve
                                                </Button>
                                            </div>
                                            <div style = {{margin : "auto", paddingLeft : "50px"}}>
                                                <Button variant = "contained" className= {classes.cancelledstyles} sx ={{ mt: 3, mb: 2 }}>
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md = {2}>
                                    <div style = {{height : "100%", display : "grid"}}>
                                            <div style = {{margin : "auto", paddingLeft : "50px"}}>
                                               <Typography color= "red" variant = "h6">
                                                   Transaction Number
                                               </Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
        </div>

            </Grid>
        </div>
    );
}

export default LoanApproval;