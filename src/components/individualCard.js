import { Grid, Typography } from '@mui/material';
import React from 'react';


const font_style = {
    fontWeight : "bold", 
    paddingRight : "5px"
}


function IndividualCard({info}) {
  
    return (
        <Grid container>
            <Grid item md = {4} height = "100%">
                <div>
                    <img src = "user1.jpg" alt = "indiviual_user_display_pic" height = "150" style = {{ borderRadius : "50%"}}/> 
                </div>
            </Grid>

            <Grid item md = {7}>
                <div className = "main-div">
                    <div className = "row-div">
                        <Typography  sx = {font_style}>Name: </Typography>
                        <Typography> {info.name}</Typography>
                    </div>
                    <div className = "row-div">
                        <Typography sx = {font_style}>Contact: </Typography>
                        <Typography> {info.contact}</Typography>
                    </div>
                    <div className = "row-div">
                        <Typography sx = {font_style}>Password: </Typography>
                        <Typography> {info.password} </Typography>
                    </div>
                    <div className = "row-div">
                        <Typography sx = {font_style}>Email: </Typography>
                        <Typography> {info.email} </Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default IndividualCard;