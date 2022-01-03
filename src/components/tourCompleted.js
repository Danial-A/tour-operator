import { Grid, Typography } from '@mui/material';
import React from 'react';
import ToursCard from './tourCard';

//css
import '../css/tour.css'

function CompleterToursCard({card}) {
    return (
        <div style = {{backgroundColor : "white"}} className = "tour-main">
            <Grid container>
                <Grid item md = {4}>
                    <ToursCard card = {card.card}/>
                </Grid>
                <Grid item md = {4}>
                    <div style = {{marginTop : "2vh"}}>
                        {
                            card.names.map(name =>(
                                <Typography variant = "h5">
                                    {name}
                                </Typography>
                            ))
                        }
                    </div>
                </Grid>
                <Grid item md = {4}>
                    <div className = "tour-card-left">
                        <Typography variant='h6'sx = {{mr : "1vw", mt : "1vh"}}>{card.date}</Typography>
                        <Typography variant = "h5" sx = {{bgcolor : "crimson", padding : "10px 20px 10px 40px", borderRadius : "20px 0 0 0", color : "white", fontWeight : "bold"}}>INR {card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default CompleterToursCard;