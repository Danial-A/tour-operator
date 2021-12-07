import React from 'react'
import {makeStyles} from '@mui/styles'
import "../css/dashboard-main.css"
import SideDrawer from '../components/side-drawer';

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            backgroundColor : "#f5f5f0",
            height : "100vh"
            },
    
        }
})


function MainPage() {
    const classes = useStyles()

    return (
        <div className = {classes.root}>
            <SideDrawer/>
        </div>
    )
}

export default MainPage
