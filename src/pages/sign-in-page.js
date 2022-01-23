import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputAdornment, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useHistory} from 'react-router'

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to right, #ed213a, #93291e)",
    // background : "orange",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width : '10vw'
  },
});


export default function SignIn() {
  const classes = useStyles();
  const history = useHistory()

  const handleSubmit = () =>{
    localStorage.setItem('signedIn', true)
    history.push('/')
    window.location.reload()
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage : "url(./background.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src = "app_logo.png" height = "250" alt = "background-signup-page"/>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="username/mobile no"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                    style : {
                        color : "red"
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon  style = {{fill : "red"}}/>
                      </InputAdornment>
                    ),
                  }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon style = {{fill : "red"}}/>
                      </InputAdornment>
                    ),
                  }}
              />
              <Stack sx = {{textAlign : "right", width : "100%"}}>
                <Link href="#" variant="body2" style = {{color : "black", textDecoration : "none", fontWeight : "400"}}>
                        Forgot password?
                </Link>
              </Stack>
              <div style = {{textAlign : "center"}}>
              <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className = {classes.root}
                    onClick = {() => handleSubmit()}
                >
                    Sign In
                </Button>
              </div>
              <Grid container>
                <Grid item>
                    <Typography variant ="subtitle1">Don't have an account?</Typography>
                  <Link href="/sign-up" variant="body2" style = {{ textDecoration : "none", fontWeight : "500"}}>
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}