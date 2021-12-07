import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'

const drawerWidth = 300;

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100vh"
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            },
            // toolbar: theme.mixins.toolbar
        }
})

function LoanApplication() {
    const classes = useStyles()
    return (
        <div className = {classes.root}>
            <SideDrawer/>
            Loan application section
        </div>
    );
}

export default LoanApplication;