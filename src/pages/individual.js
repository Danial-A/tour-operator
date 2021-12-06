import React from 'react'
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'

const useStyles = makeStyles({
    root : {
        display : "flex"
    }
})

function Individual() {
    const classes = useStyles()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            <div>
                Individual listings page
            </div>
        </div>
    )
}

export default Individual
