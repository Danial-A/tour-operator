import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';

//css
import '../css/card.css'

export default function ToursCard({card}) {
  return (
    <Card sx={{ maxWidth: 200 , maxHeight : 260, boxShadow : "none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="green iguana"
        />
        <CardContent sx = {{textAlign : "center", position :"relative"}}>
        <div className = "listing-btn-container" style = {{top : "-25%"}}>         
              <button className = "listing-card-button">{card.name.toUpperCase()}</button>
        </div>
          <Typography fontWeight = "600" variant="h5" component="div" marginTop = "0.7vh">
            INR {card.price}
          </Typography>
          <Divider/>
          <Typography gutterBottom variant="subtitle1" fontWeight = "bold" fontSize  = "13px" component="div" mt = {1}>
            {card.days} DAYS {card.nights} NIGHTS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
