import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// App.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={() =>  <Home /> } />
        <Route exact path='/service' render={() => { return <Service  name = 'SERVICE'/> }} /> 
        <Route exact path='/contact' component = {Contact} />
        {/* <Route path='/contact/About' component={About} /> */}
        <Route component={Error} />
        {/* <Home />
      <About />
      <Contact /> */}
      </Switch>
    </>
  );
};

export default App;

// Navbar.js

import React from 'react';
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return (
        <>
        
        <NavLink exact activeClassName="active_class" to= '/'> Home </NavLink>
        <NavLink exact activeClassName="active_class" to= '/contact'> ContactUs </NavLink>
        <NavLink exact activeClassName="active_class" to= '/service'> Service </NavLink>
       
        </>
    );
};

export default Navbar;

// Home.js

import React from 'react';

const Home = () => {
    return (
        <>
            <h1> This is Home page </h1>
           
        </>
    );
};

export default Home;

// Service.js

import React from 'react';

const Service = (props) => {
    return (
        <>
            <h1> This is {props.name} page </h1>
            
        </>
    );
};

export default Service;

// Contact.js

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// index.css

.active_class {
    color: red;
  }
  