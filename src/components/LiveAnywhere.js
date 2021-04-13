import React, {useState} from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import "../styles/Home.css";
import cardData from '../data/liveAnywhere.json'
import '../styles/LiveAnywhere.css'

const LiveAnywhere = () => {
    const [data, setData] = useState(cardData)
  return (
    <div className="live-anywhere">
      <h1 className="title">Live anywhere</h1>
      <div className="card-section">
        {data.map((item) => (
          <CardActionArea className="cards">
            <CardMedia
              className="card-imgs"
              component="img"
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography
                className="card-text"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        ))}
      </div>
    </div>
  );
};

export default LiveAnywhere;
