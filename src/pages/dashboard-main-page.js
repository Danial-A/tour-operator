import React from 'react'
import {makeStyles} from '@mui/styles'
import "../css/dashboard-main.css"
import SideDrawer from '../components/side-drawer';

const useStyles = makeStyles({
    root : {
        display : "flex"
    }
})

function MainPage() {
    const classes = useStyles()

    return (
       <div className = {classes.root}>
           
           <SideDrawer/>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
       </div>
    )
}

export default MainPage
