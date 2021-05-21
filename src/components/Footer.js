import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import TodayIcon from "@material-ui/icons/Today";
import { Home } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    backgroundColor: '#009bcc', 
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <AppBar
      position="static"
      color="primary"
      style={{
        position: "fixed",
        bottom: "0",
      }}
    >
      <Container maxWidth="md">
        <Toolbar>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <Container fixed>
              <Grid container spacing={1} style={{ marginTop: "10px" }}>
                <Grid item xs={4}>
                  <NavLink
                    exact={true}
                    activeClassName="is-active"
                    to="/Calendar"
                  >
                    <TodayIcon />
                    <p style={{ marginTop: "-10px" }}>Calendar</p>
                  </NavLink>
                </Grid>

                <Grid item xs={4}>
                  <NavLink activeClassName="is-active" to="/Home">
                    <Home />
                    <p style={{ marginTop: "-10px" }}>Home</p>
                  </NavLink>
                </Grid>

                <Grid item xs={4}>
                  <NavLink activeClassName="is-active" to="/MyProfile">
                    <AccountCircleIcon />
                    <p style={{ marginTop: "-10px" }}>My Profile</p>
                  </NavLink>
                </Grid>
              </Grid>
            </Container>
          </BottomNavigation>
        </Toolbar>
        <Typography
          variant="body1"
          color="inherit"
          style={{ textAlign: "center" }}
        ></Typography>
      </Container>
    </AppBar>
  );
}
