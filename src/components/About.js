import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import CallToAction from "./ui/CallToAction";
import history from "../assets/history.svg";
import Avatar from "@material-ui/core/Avatar";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "15em",
    width: "15em",
    [theme.breakpoints.down("sm")]:{
        height:"12em",
        width:"12em",
        maxWidth:300,
        maxHeight:300,
    }
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>About Us</Typography>
      </Grid>
      <Grid item justify="center" className={classes.rowContainer} style={{ marginTop: "3em" }}>
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person. business to consumer. or an individual
          to their interests technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive. and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom:"10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined}>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                Founded in 2019, were ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top"
              style={{ maxHeight: matchesMD ? 200 :  "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Yakshit Garg , Web Developer
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 16 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined}>
           <Hidden mdDown>
            <Grid item>
              <img src={yearbook} alt="yearbook" style={{maxWidth: matchesMD ? 300 :undefined }} />
            </Grid>
            </Hidden>
            <Grid item>
              <Typography variant="caption">
                A Page from my Sophommore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{maxWidth:"45em" , padding:"1.5em"}}>
            <Typography variant="body1" align="center" paragraph>
              I taught myself basic coding from a library book in 12th grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Now I'm ready to apply everything I've learned, and to help others
              with the
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems={matchesMD ? "center" : "flex-end"}>
          <Grid item >
            <img src={puppy} alt="Puppy" style={{maxWidth: matchesMD ? 300 :undefined }}/>
          </Grid>
          <Grid item>
              <Typography variant="caption">
              My miniature dapple dachshund dog
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue}></CallToAction>
      </Grid>
    </Grid>
  );
}
