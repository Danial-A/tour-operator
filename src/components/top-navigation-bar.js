import React from 'react';
import '../css/topbar.css'
import {  Grid, Typography, Stack, IconButton, Avatar, Menu, MenuItem} from '@mui/material';
import { Logout, MessageRounded } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) =>{
    return {
            iconSize : {
                fontSize : 40
            },
            avatar_class : {
                "&:hover" : {
                    cursor : "pointer"
                }
            }
        }
})


function TopBar({title}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const classes = useStyles()
    return (
        <div className = "navbar-main">
        <Grid container paddingTop = "5vh" sx = {{px : "2vw"}} marginBottom = "5vh">
            <Grid item sm = {6} sx = {{width : "75vw"}}>
                <Stack direction = "row" spacing = {2}>
                    <IconButton sx = {{display : {md : "none", sm : "block"}}} >
                        <MenuIcon style = {{fontSize : 50}}/>
                    </IconButton>
                    <Typography variant = "h3">
                        {title}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item sm = {6}>
                <Stack direction = "row-reverse" spacing = {2}>
               
                    <Avatar alt = "User profile image" src = "user1.jpg" sx = {{height : "6vh",width : "3vw"}} className = {classes.avatar_class}
                        onClick = {handleClick}
                    />
                <IconButton>
                    <MessageRounded style = {{ fill : "crimson", fontSize : 40, padding : 0}}/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon style = {{ fill : "crimson", fontSize : 40, padding : 0}} />
                </IconButton>
                </Stack>
            </Grid>
        </Grid>
       
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>

        <IconButton>
            <AccountCircleIcon style = {{fill : "crimson"}}/>
        </IconButton>
            <Typography pl = {1}>
                Profile
            </Typography>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <MessageRounded style = {{fill : "crimson"}}/>
          </IconButton>
            <Typography pl = {1}>
                Messages
            </Typography>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <Logout style = {{fill : "crimson"}}/>
          </IconButton>
            <Typography pl = {1} onClick = {()=> window.alert("Logging out")}>
                Logout
            </Typography>
        </MenuItem>
      </Menu>
       </div>
   
    );
};

export default TopBar;