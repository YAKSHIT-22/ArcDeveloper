import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import animationData from '../animations/landinganimation/data'
import  Grid from '@material-ui/core/Grid';
import ButtonArrow from './ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
import CallToAction from './ui/CallToAction';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme=>({
    animation:{
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"30em",
        },
    },
    estimateButton:{
        ...theme.typography.estimate,
        color:theme.palette.common.orange,
        borderRadius:6,
        borderColor:theme.palette.common.orange,
        height:45,
        width:145,
        marginRight:30,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light,
            color:"white"
        }
    },
    buttonContainer:{
        marginTop:"1em",
    },
    learnButtonHero:{
        color:theme.palette.common.blue,
        textTransform:"none",
        borderRadius:6,
        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:"0.9rem",
        height:45,
        width:145,
    },
    mainContainer:{
        marginTop:"5em",
        [theme.breakpoints.down("md")]:{
            marginTop:"3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop:"2em"
        },       
    },
    heroTextContainer:{
        minWidth:"21.5em",
        marginLeft:'1em',
        [theme.breakpoints.down("xs")]:{
            marginLeft:"0",
        },  
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
    subtitle:{
        marginBottom:"1em",
    },
    Icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0
        }
    },
    serviceContainer:{
        marginTop:"12em",
        [theme.breakpoints.down("sm")]:{
           padding:25,
        }
    },
    revolutionBackground:{
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        height:"100%",
        width:"100%"
    },
    revolutionCard:{
        position:"absolute",
        boxShadow:theme.shadows[10],
        borderRadius:10,
        padding:"10em",
        [theme.breakpoints.down("sm")]:{
            paddingTop:"8em",
            paddingBottom:"8em",
            paddingLeft:0,
            paddingRight:0,
            borderRadius:0,
            width:"100%",
        }
    },
    infoBackground:{
        backgroundImage:`url(${infoBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        height:"100%",
        width:"100%"
    }
}))

export default function LandingPage(props){
    const classes = useStyles(); 
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

     return(
        <React.Fragment>
        <Grid container direction="column" className={classes.mainContainer}>
          <Grid item style={{marginTop: matchesSM ? "2em" : "3em"}}>
           <Grid container justify="flex-end" alignItems="center" direction="row">
            <Grid sm item className={classes.heroTextContainer}>
                <Typography variant="h2" align="center">Bringing West Coast Technology<br/>to the Midwest</Typography>
                <Grid container justify="center" className={classes.buttonContainer}>
                    <Grid item>
                       <Button onClick={()=>props.setValue(5)} className={classes.estimateButton} variant='outlined' component={Link} to='/estimate'>Free Estimate</Button> 
                    </Grid>
                    <Grid item>
                       <Button onClick={()=>props.setValue(2)} component={Link} to='/revolution' variant='contained' justify="center" alignItems="center" className={classes.learnButtonHero}><span style={{marginRight:10}}>Learn More</span>
                       <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                       </Button> 
                    </Grid>
                </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
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
                <Button onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} component={Link} to='/customsoftware' variant='outlined' justify="center" alignItems="center" className={classes.learnButton}><span style={{marginRight:10}} >Learn More</span>
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
           <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
             <Grid item style={{textAlign:matchesSM ? "center" : undefined}}>
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
                <img className={classes.Icon} alt="mobile phone icon" src={mobileAppsIcon}/>
             </Grid>
           </Grid>
          </Grid>
          <Grid item>
            {""}
           <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
             <Grid item style={{marginLeft: matchesSM ? 0 : "5em",textAlign:matchesSM ? "center" : undefined}}>
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
             <Grid item style={{}}>
                <img className={classes.Icon} alt="Website icon" src={websiteIcon}/>
             </Grid>
           </Grid>
          </Grid>
          <Grid item>
            <Grid container style={{height:"100em", marginTop:"12em"}} alignItems="center" justify="center">
            <Card className={classes.revolutionCard} style={{margin:"10px 10px 10px 10px"}}>
                <CardContent>
                    <Grid container direction="column"  style={{textAlign:"center"}}>
                        <Grid item>
                           <Typography variant="h3" gutterBottom>
                            The Revolution
                           </Typography>
                        </Grid>
                        <Grid item>
                           <Typography variant="subtitle1">
                            Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                           </Typography>
                           <Button onClick={()=>props.setValue(2)} component={Link} to='/revolution' variant='contained' justify="center" alignItems="center" className={classes.learnButtonHero}><span style={{marginRight:10}}>Learn More</span>
                       <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                       </Button> 
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <div className={classes.revolutionBackground}></div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" direction="row" style={{height:"80em"}} className={classes.infoBackground}>
                <Grid item sm container style={{textAlign:matchesXS ? "center" : "inherit"}} direction={matchesXS ? "column" : "row"}>
                <Grid item style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" :"5em"}}>
                  <Grid container style={{marginBottom: matchesXS ? "10em" : "0"}} direction="column">
                    <Typography variant="h2" style={{color:"white"}}>About Us</Typography>
                    <Typography variant="subtitle2">Let's get personal.</Typography>
                    <Grid item>
                    <Button onClick={()=>props.setValue(3)} component={Link} to='/about' variant='outlined' style={{color:"white",borderColor:"white"}} justify="center" alignItems="center" className={classes.learnButton}><span style={{marginRight:10}}>Learn More</span>
                       <ButtonArrow width={10} height={10} fill="white"/>
                       </Button> 
                    </Grid>
                </Grid>  
               </Grid> 
                <Grid item sm style={{marginRight: matchesXS ? 0 : matchesSM ? "2em" :"5em", textAlign:matchesXS ? "center" :"right"}}>
                  <Grid container direction="column">
                    <Typography variant="h2" style={{color:"white"}}>Contact Us</Typography>
                    <Typography variant="subtitle2">Say hello! <span role="img" aria-label="waving hand">✋</span></Typography>
                    <Grid item>
                    <Button onClick={()=>props.setValue(4)} component={Link} to='/contact' variant='outlined' style={{color:"white",borderColor:"white"}} justify="center" alignItems="center" className={classes.learnButton}><span style={{marginRight:10}}>Learn More</span>
                       <ButtonArrow width={10} height={10} fill="white"/>
                       </Button> 
                    </Grid>
                </Grid>  
               </Grid> 
                </Grid>
                
              
            </Grid>
          </Grid>
          <Grid item>
           <CallToAction setValue={props.setValue}></CallToAction>
          </Grid>
        </Grid>   
        </React.Fragment>
     ) 
}