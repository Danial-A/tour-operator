// import React from 'react'
import {Drawer,Box, List, ListItem, ListItemText, ListItemIcon} from '@mui/material'
import {makeStyles} from '@mui/styles'
import "../css/dashboard-main.css"
import { SubjectOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useHistory, useLocation } from 'react-router';
// import { useState } from 'react';

const drawerWidth = 300;
const useStyles = makeStyles({
    drawer : {
        width : drawerWidth
    },
    drawerPaper : {
        width : drawerWidth,
        background : "#f5f5f0 !important"
    },
    active:{
        background : "#f4f4f4"
    }
})

const menuItems = [
    {
        text : "Dashboard",
        icon : <SubjectOutlined/>,
        path : "/"
    },
    {
        text : "Individual",
        icon : <PersonIcon/>,
        path : "/individual"
    },
    {
        text : "Tour Agents",
        icon : <PeopleIcon/>,
        path : "/tour-agents"
    },
    {
        text : "Listings",
        icon : <ListAltIcon/>,
        path : "/listings"
    },
    {
        text : "Tours Completed",
        icon : <CheckCircleIcon/>,
        path : "/tours-completed"
    },
    {
        text : "Cancelled",
        icon : <CancelIcon/>,
        path : "/cancelled"
    },
    {
        text : "Loan Application",
        icon : <CreditScoreIcon/>,
        path : "/loan-application"
    },
    {
        text : "Loan Approval",
        icon : <CheckBoxIcon/>,
        path : "/loan-approval"
    },
    {
        text : "Push Notifications",
        icon : <NotificationsActiveIcon/>,
        path : "/push-notifications"
    },
    {
        text : "Finance",
        icon : <AttachMoneyIcon/>,
        path : "/finance"
    }
]


function SideDrawer() {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    // const [open, setOpen] = useState(false)

    return (
        <Drawer
        className = {classes.drawer}
        anchor = "left"
        classes = {{paper : classes.drawerPaper}}
        variant = "permanent"
  
        sx = {{display : {sm : "none", md : "block"}}}
        >
            <div className = "dasboard-logo">
                <Box>
                    <img src = "app_logo.png" height = "200" alt = "dashboard-logo-png"/>
                </Box>
            </div>
            {/* List links */}
            <List>
                {menuItems.map(item =>(
                    <ListItem 
                        key = {item.text} 
                        button
                        onClick = {() => history.push(item.path)}
                        className = {location.pathname === item.path ? "active": null}
                    >
                      <ListItemIcon className = {location.pathname === item.path ? "active-icon" : "item-icon"}>{item.icon}</ListItemIcon>
                      <ListItemText primary = {item.text} /> 
                  </ListItem>   
                ))}
            </List>

        </Drawer>
    )
}

export default SideDrawer
