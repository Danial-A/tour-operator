import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputAdornment, Typography } from '@mui/material';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to right, #ed213a, #93291e)",
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  
  const classes = useStyles()
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
              mb: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src = "app_logo.png" height = "250" alt = "background-signup-page"/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            
            <Grid container columnSpacing = {{md : 2}}>
                <Grid item md = {6}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="firstname"
                    name="firstname"
                    autoComplete="firstname"
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
                </Grid>

                <Grid item md = {6}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="lastname"
                name="lastname"
                autoComplete="lastname"
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
                </Grid>

                <Grid item md = {12}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    InputProps={{
                        style : {
                            color : "red"
                        },
                        startAdornment: (
                        <InputAdornment position="start">
                            <AlternateEmailOutlinedIcon  style = {{fill : "red"}}/>
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>

                <Grid item md = {6}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="phone#"
                label="phone#"
                name="phone#"
                autoComplete="phone#"
                autoFocus
                InputProps={{
                    style : {
                        color : "red"
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidOutlinedIcon  style = {{fill : "red"}}/>
                      </InputAdornment>
                    ),
                  }}
              />
                </Grid>

                <Grid item md = {6}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    InputProps={{
                        style : {
                            color : "red"
                        },
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleOutlinedIcon  style = {{fill : "red"}}/>
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>

            </Grid>
              
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
              <div style = {{textAlign : "center"}}>
              <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className  = {classes.root}
                >
                    Sign Up
                </Button>
              </div>
              <Grid container>
                <Grid item>
                    <Typography variant ="subtitle1">Already have an account?</Typography>
                  <Link href="/sign-in" variant="body2" style = {{ textDecoration : "none", fontWeight : "500"}}>
                    Sign In
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