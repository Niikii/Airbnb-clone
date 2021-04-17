import React, { useState } from "react";
import exploreData from "../data/exploreNearby.json";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import cardData from "../data/liveAnywhere.json";
import "../styles/LiveAnywhere.css";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/ExploreNearby.css";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    borderRadius: "7px",
    flex: "1 0 21%",
    height: "100px",
  },
  media: {
    height: "64px",
    width: "64px",
    borderRadius: "7px",
    display: "flex",
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  text: {
    fontSize: "16px",
    fontFamily:
      "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif, bold",
  },
  subText: {
    fontSize: "14px",
    fontFamily:
      "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif, bold",
  },
});

const ExploreNearby = () => {
  const classes = useStyles();
  const [data, setData] = useState(exploreData);
  return (
    <div className="explore">
      <h1 className="explore-title">Explore nearby</h1>
      <div className="explore-cards">
        {data.map((item) => (
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.img} />
            <CardContent className={classes.content}>
              <Typography className={classes.text} gutterBottom variant="h6">
                {item.town}
              </Typography>
              <Typography className={classes.subText} gutterBottom variant="h8">
                {item.distance}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <div class="parent">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>
    </div>
  );
};

export default ExploreNearby;
