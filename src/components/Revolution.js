import React from "react";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "./ui/CallToAction";
import vision from "../assets/vision.svg";
import technologyAnimation from "../animations/technologyAnimation/data";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" align={matchesMD ? "center" : undefined} style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{marginTop:"5em"}}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculars"
            style={{ maxWidth: matchesSM ? 300 :"40em", marginRight: matchesMD ? 0 : "5em",marginBottom: matchesMD ? "5em" : 0 }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography align={matchesMD ? "center" : "right"} variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              What once was confined to huge rooms and teams Of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{marginTop:"5em",marginBottom:"10em"}}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined}>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              In 201 3, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              Instead Of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              Of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions Of it were even
              rebuilt using React.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "32em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#b3b3b3", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={consultation} alt="handshake" width="100%" style={{maxWidth: 700}} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#ff7373", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
            align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Then it's time for us to start on your minimum viable product.
              That's just a fancy term for a mockup, which doesn't include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={mockup} alt="basic website design outline" width="100%" style={{maxWidth: 1000}} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography
            align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Once you're completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine. details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} width="100%" style={{maxWidth:"35em"}} alt="magnifying Glass" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#a67c52", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Using the mockups and notes taken during the consultation as
              guides. we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts, and
              logos to extend the experience you're already familiar with.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={design} width="100%" alt="basic website design outline" style={{maxWidth: 1000}}/>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid item container direction="column"  alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
            align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              This time we'll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" style={{maxWidth:"35em"}} width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#fbb03b", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Here's where we get down to business.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Each area is then in order of importance until ready to be
              connected to the next piece.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Finishing the application doesn't mean we're done though, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
            >
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline- This an
              optimized, compressed, consumer version of the code and assets
              ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={build} width="100%" alt="construction" style={{maxWidth: matchesMD ? 700 : 1000}}/>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#c1272d", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              The moment we've all been waiting for.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              When construction comes to a close you're the first one to know.
              We'll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
              users.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              When you say the word, we press the button and launch your project
              out to the public. We're there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={launch} width="100%" alt="rocket" style={{maxWidth: 200}} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8e45ce", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Our work doesn't end there.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments anse or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={maintain} width="100%" alt="wrench tightening bolts" style={{maxWidth: 500}}/>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29abe2", height: "90em" }}
      >
        <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={iterate} width="100%" alt="falling dominos" style={{maxWidth: 1000}} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
