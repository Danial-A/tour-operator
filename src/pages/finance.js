import React from 'react';
import {makeStyles} from '@mui/styles'
import SideDrawer from '../components/side-drawer'
import { Grid } from '@mui/material';
import TopBar from '../components/top-navigation-bar';
import { useLocation } from 'react-router';
import { DataGrid } from '@mui/x-data-grid';

const drawerWidth = 300;

const columns = [
    { field: 'id', headerName: 'INVOICE NO', flex : 1,headerClassName: 'column-header', },
    { field: 'transactionId', headerName: 'TRANSACTION ID', flex : 1,headerClassName: 'column-header', },
    { field: 'amount', headerName: 'AMOUNT', flex : 1,headerClassName: 'column-header', },
    {
        field: 'transactionFrom',
        headerName: 'TRANSACTION FROM',
        flex : 1,headerClassName: 'column-header',
      },{
        field: 'date',
        headerName: 'DATE',
        flex : 1,headerClassName: 'column-header',
      },{
        field: 'idToTA',
        headerName: 'TRANSACTION ID TO TA',
        type: 'string',
        flex : 1, headerClassName: 'column-header',
      },{
        field: 'dateToTA',
        headerName: 'DATE (TO TA)',
        flex : 1, headerClassName: 'column-header',
      }
    
  ];
  
  const rows = [
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
    { id: "INV100001", transactionId: 'TRC2124K', amount: '160,000', transactionFrom: "Some User" , date : "26 April, 2020", idToTA : "TRK21223J", dateToTA : "29 APRIL 2021"},
   
  ];

const useStyles = makeStyles((theme) =>{
    return {
        root : {
            display : "flex",
            height : "100vh",
            backgroundColor : "#f4f4f4"
            },
        appbar :{
            width : `calc(100% - ${drawerWidth}px)`
            },
            // toolbar: theme.mixins.toolbar
        }
})

function Finance() {
    const classes = useStyles()
    const location = useLocation()
    return (

        <div className = {classes.root}>
            <SideDrawer/>
            <Grid container>
            <div>
            <TopBar title = {location.pathname.replace(/[^a-zA-Z ]/g, " ").toUpperCase()}/>
            <div style = {{height : "70vh", padding : "5vh 5vw"}}>
                <DataGrid
                        columns={columns}
                        rows={rows}
                        sx={{
                        boxShadow: 5,
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                            cursor : "pointer"
                        },
                        '& .column-header': {
                            backgroundColor: 'crimson',
                            color : "white",
                            textAlign : "center",
                            fontWeight : "bold",
                            fontSize : "16px"
                          },
                        }}
                    />
            </div>
            </div>

            </Grid>
        </div>

       
    );
}

export default Finance;