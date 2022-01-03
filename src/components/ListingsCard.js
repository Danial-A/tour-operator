import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

//css
import '../css/card.css'

const cardFill = {
  fill : "crimson"
}

export default function ListingsCard({card}) {
    console.log(card)
  return (
    <Card sx={{ maxWidth: 225, borderRadius : "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="green iguana"
        />
        <CardContent sx = {{textAlign : "center", position :"relative"}}>
        <div className = "listing-btn-container">         
              <button className = "listing-card-button">{card.name}</button>
        </div>
          <Typography fontWeight = "bold" variant="h5" component="div" marginTop = "0.7vh">
            INR {card.price}
          </Typography>
          <Typography gutterBottom variant="subtitle1" fontWeight = "bold" fontSize  = "13px" component="div">
            {card.days} DAYS {card.nights} NIGHTS
          </Typography>
          <Divider/>
          <Typography variant="body2" color="text.secondary" mt = {1} fontSize = "12px">
            BLUE STAR TOURS & TRAVELS
          </Typography>
          <div style = {{marginTop : "5px"}}>
            <StarIcon sx = {cardFill}/>
            <StarIcon sx = {cardFill}/>
            <StarIcon sx = {cardFill}/>
            <StarIcon sx = {cardFill}/>
            <StarIcon sx = {cardFill}/>
          </div>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
