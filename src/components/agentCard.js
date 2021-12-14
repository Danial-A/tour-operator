import { Grid, Typography } from '@mui/material';
import React from 'react';

function AgentCard({agent}) {
    return (
        <Grid container columnSpacing = {4}>
            <Grid item md = {4} >
               <div 
               style = {{
                   height : "100%", 
                   background : "url('beach.jpg') no-repeat",
                   backgroundSize : "cover",
                   borderRadius: "20px 0px  0px 20px"
            
            }}>
                    {/* <img src = "beach.jpg" alt = "agent card"/> */}
               </div>
            </Grid>

            <Grid item md = {7} sx = {{
                padding : "10px 5px"
            }}>
                <div>
                    <Typography>{agent.name}</Typography>
                    <Typography>{agent.address}</Typography>
                    <Typography>{
                        agent.phone.map(p=>(
                            `${p}, `
                            ))}
                    </Typography>
                    <Typography>{agent.email}</Typography>
                    <Typography>{agent.code}</Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default AgentCard;