import React, { useState } from "react";
import discoverData from "../data/discover.json";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import "../styles/Discover.css";

const useStyles = makeStyles({
  content: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
});

const Discover = () => {
  const [data, setData] = useState(discoverData);
  const classes = useStyles();
  return (
    <div className="discover">
      <h1 className="discover-title">Discover Experiences</h1>
      <h3 className="subTitle">
        Unique activities with local experts—in person or online.
      </h3>
      <div className="discover-section">
        {data.map((item) => (
          <CardActionArea className="cards">
            <CardMedia
              className="card-imgs"
              component="img"
              image={item.img}
              title={item.title}
            />
            <CardContent className={classes.content}>
              <Typography
                className="card-text"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                {item.info}
              </Typography>
            </CardContent>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
};

export default Discover;
