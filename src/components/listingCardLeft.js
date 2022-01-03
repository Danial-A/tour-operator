import { Grid, Typography } from '@mui/material';
import React from 'react';
import ToursCard from './tourCard';

//css
import '../css/tour.css'

function ListingCardLeft({card}) {
    return (
        <div style = {{backgroundColor : "white"}}>
            <Grid container columnSpacing={4}>
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

                        <Typography>Invoice</Typography>

                        <Typography variant = "h5" sx = {{bgcolor : "crimson", padding : "10px 20px 10px 40px", borderRadius : "20px 0 0 0", color : "white", fontWeight : "bold"}}>{card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListingCardLeft;