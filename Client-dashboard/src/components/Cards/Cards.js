import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

import { BiMapPin } from "react-icons/bi";

const Cards = ({
  data: { temperature, humidity, localtime,country,region },
}) => {
  console.log("from card",temperature);
  // if (!temperature) {
  //   return "Loading...";
  // }
  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.temperature)}
        >
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Temperature
          </Typography>
          <FaTemperatureHigh
            style={{
              width: "123px",
              height: "40px",
              display: "flex",
              marginLeft: "72%",
              marginTop: "-45px",
            }}
          />
          <hr />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {temperature} °C
            </Typography>
            <Typography color="textSecondary">
              {new Date(localtime).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.humidity)}
        >
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Humidity
          </Typography>
          <WiHumidity
            style={{
              width: "123px",
              height: "40px",
              display: "flex",
              marginLeft: "72%",
              marginTop: "-45px",
            }}
          />
          <hr />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {humidity} %
            </Typography>
            <Typography color="textSecondary">
              {new Date(localtime).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.country)}
        >
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Country
          </Typography>
          <BiMapPin
            style={{
              width: "123px",
              height: "40px",
              display: "flex",
              marginLeft: "72%",
              marginTop: "-45px",
            }}
          />
          <hr />
          <CardContent>
            <Typography variant="h5" gutterBottom>
            {country}, {region}
            </Typography>
           
            <Typography color="textSecondary">
              {new Date(localtime).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
