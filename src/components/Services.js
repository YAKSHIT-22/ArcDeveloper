import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import  Grid from '@material-ui/core/Grid';
import ButtonArrow from './ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme=>({
    serviceContainer:{
        marginTop:"10em",
        [theme.breakpoints.down("sm")]:{
           padding:25,
        }
    },  
    subtitle:{
        marginBottom:"1em",
    },
    Icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0
        }
    },
    specialText:{
        fontFamily:"Pacifico",
        color: theme.palette.common.orange,
    },
    learnButton:{
       ...theme.typography.learnButton,
       fontSize:"0.7em",
       height:35,
       padding:5,
       [theme.breakpoints.down("sm")]:{
        marginBottom:"2em",
       }
    },
}))

export default function Services(props){
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    
    return(
      <Grid container direction="column">
         <Grid item style={{marginLeft: matchesSM ? 0 : "5em",marginTop: matchesSM ? "2em" : "3em"}}>
            <Typography variant="h2" align={matchesSM ? "center" : undefined} gutterBottom >Services</Typography>
         </Grid>
         <Grid item>
            {""}
           <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer} style={{marginTop: matchesSM ? "1em":"5em"}}>
             <Grid item style={{textAlign:matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}} >
                <Typography variant="h4">
                    iOS/Android App Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Extend Functionality. Extend Access, Increase Engagment.
                </Typography>
                <Typography variant="subtitle1">
                   Integrate your web experience or create a standalone app{matchesSM?null:<br/>}with either mobile platform.
                </Typography>
                <Button onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}} component={Link} to='/mobileapps' variant='outlined' justify="center" alignItems="center" className={classes.learnButton}><span style={{marginRight:10}}>Learn More</span>
                       <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                       </Button> 
             </Grid>
             <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                <img className={classes.Icon} alt="mobile phone icon" src={mobileAppsIcon} width="250em"/>
             </Grid>
           </Grid>
          </Grid>

             <Grid item>
            {""}
           <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
             <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign:matchesSM ? "center" : undefined}}>
                <Typography variant="h4">
                    Custom Software Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1">
                    Complete digital solutions, from investigation to{""} <span className={classes.specialText}>celebration</span>
                </Typography>
                <Button onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} variant='outlined' justify="center" alignItems="center" className={classes.learnButton}><span style={{marginRight:10}} component={Link} to='/customsoftware'>Learn More</span>
                       <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                       </Button> 
             </Grid>
             <Grid item>
                <img className={classes.Icon} alt="custom software icon" src={customSoftwareIcon}/>
             </Grid>
           </Grid>
          </Grid>
         
          <Grid item>
            {""}
           <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer} style={{marginBottom:"10em"}}>
             <Grid item style={{textAlign:matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
                <Typography variant="h4">
                    Website Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach More. Discover More. Sell More.
                </Typography>
                <Typography variant="subtitle1">
                   Optimized for Search Engines, built for speed.
                </Typography>
                <Button onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}} component={Link} to='/websites' variant='outlined' justify="center" alignItems="center" className={classes.learnButton}><span style={{marginRight:10}}>Learn More</span>
                       <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                       </Button> 
             </Grid>
             <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                <img className={classes.Icon} alt="Website icon" src={websiteIcon} width="250em"/>
             </Grid>
           </Grid>
          </Grid>



      </Grid>
    )
}