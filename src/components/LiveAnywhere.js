import React, { useState } from "react";
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

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    borderRadius: "7px",
  },
  media: {
    height: "326px",
    width: "326px",
    borderRadius: "7px",
  },
  text: {
    padding: 5,
  },
});

const LiveAnywhere = (props) => {
  const [data, setData] = useState(cardData);
  const classes = useStyles();

  return (
    <div className="live-anywhere">
      <h1 className="liveAnywhere-title">Live anywhere</h1>
      <div className="card-section">
        {data.map((item) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.img}
                title={item.title}
              />
              <CardContent className={classes.text}>
                <Typography className="card-text" gutterBottom variant="h5">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LiveAnywhere;
