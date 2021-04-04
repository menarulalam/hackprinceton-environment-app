import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import RecycleIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Progress from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import { firestore } from "./firebase";
import './Dashboard.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function setProgress(type, newProgress) {

  const check = ('bike', 'recycle', 'food');
  if (!(type in check)){
      throw TypeError;
  }
  const data = {
      progress: newProgress
  }

  firestore.collection(type).add(data);
  return null;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
 
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
    //Goals
    const [bikeGoal, setBikeGoal] = React.useState(10);
    const [recycleGoal, setRecycleGoal] = React.useState(15);
    const [foodGoal, setFoodGoal] = React.useState(20);
  //Progress
    const [bikeProgress, setBikeProgress] = React.useState(0);
    const [recycleProgress, setRecycleProgress] = React.useState(0);
    const [foodProgress, setFoodProgress] = React.useState(0);
const [home, setHome] = React.useState(true);
const [food, setFood] = React.useState(false);
const [bike, setBike] = React.useState(false);
const [recycle, setRecycle] = React.useState(false);

const [index, setIndex] = React.useState(0);



  const trees = (numTrees) => {
    return "some html with numTrees trees";
  }
  const setBikeProgress1 = (event) => {
    const new_val = parseInt(event.target.value);
    if(Number.isInteger(new_val) && new_val >=0 ){
      setBikeProgress(Math.min(parseInt(bikeGoal), parseInt(bikeProgress) + parseInt(new_val)));
    }
  }

  const setRecycleProgress1 = (event) => {
    const new_val = parseInt(event.target.value);
    if(Number.isInteger(new_val) && new_val >=0 ){
      setRecycleProgress(Math.min(parseInt(recycleGoal), parseInt(recycleProgress) + parseInt(new_val)));
    }
  }

  const setFoodProgress1 = (event) => {
    const new_val = parseInt(event.target.value);
    if(Number.isInteger(new_val) && new_val >=0 ){
      setFoodProgress(Math.min(parseInt(foodGoal), parseInt(foodProgress) + parseInt(new_val)));
    }
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleHome = () =>{
    setIndex(0);
  };

  const toggleBike = () =>{
    setIndex(1);
  };

  const toggleRecycle = () =>{
    setIndex(2);

  };
  
  const toggleFood = () =>{
    setIndex(3);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          > <Container>
            PROJECT OCELOT
            <Progress np={60} />
            </Container>
          </Typography>
          {/*<IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>*/}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
          <List>
            <div>
              <ListItem button onClick = {toggleHome}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button onClick = {toggleBike}>
                <ListItemIcon>
                  <DirectionsBikeIcon />
                </ListItemIcon>
                <ListItemText primary="Miles Biked" />
              </ListItem>
              <ListItem button onClick = {toggleRecycle}>
                <ListItemIcon>
                  <RecycleIcon />
                </ListItemIcon>
                <ListItemText primary="Items Recycled" />
              </ListItem>
              <ListItem button  onClick = {toggleFood} >
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Good Food Choices" />
              </ListItem>
            </div>
          </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <div className={classes.appBarSpacer} />
        {index === 0 && 
        <div>
            <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          > <Container>
            Progress for today
            <Progress now= {33.333*parseInt(bikeProgress)/parseInt(bikeGoal) + 33.333*parseInt(recycleProgress)/parseInt(recycleGoal) + 33.333*parseInt(foodProgress)/parseInt(foodGoal)} /> 
            </Container>
          </Typography>
        
        </div>
        }
        {index === 1 && <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Enter Miles Biked today" 
              name = 'bikeProgress'
              onChange = {setBikeProgress1}
              />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            > <Container>
              Progress for today
              <br/>
              Target: {bikeGoal}  Bike Progress: {bikeProgress} <br/>
              <Progress now= {100.0*parseInt(bikeProgress)/parseInt(bikeGoal)} /> 
              </Container>
          </Typography>
          </form>
        </div> }
        {index === 2 && <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Items Recycled today" 
              name = 'recycleProgress'
              onChange = {setRecycleProgress1}
              />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            > <Container>
              Progress for today
              <br/>
              Target: {recycleGoal}  Recycle Progress: {recycleProgress} <br/>
              <Progress now= {100.0*parseInt(recycleProgress)/parseInt(recycleGoal)} /> 
              </Container>
          </Typography>
          </form>

          </div> }
        {index === 3 && <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Good food choices for today" 
              name = 'foodProgress'
              onChange = {setFoodProgress1}
              />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            > <Container>
              Progress for today
              <br/>
              Target: {foodGoal}  Recycle Progress: {foodProgress} <br/>
              <Progress now= {100.0*parseInt(foodProgress)/parseInt(foodGoal)} /> 
              </Container>
          </Typography>
          </form>

          </div>  }

      </Box>
    </Box>
  );

}
