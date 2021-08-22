import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import {Grid, Typography} from "@material-ui/core";
import Api from '../../Api/api';
import useStyles from './style';

export default function HomePage() {
  const [users] = Api();
  const classes = useStyles();

  return (
    <div>
    <Typography  className={classes.heading}>React Assignment</Typography>
      <Grid
        container
        className={classes.root}
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        background="green"
      >
        {users.map((data, index) => (
          <Grid
            key={index}
            item
            sm={12}
            md={6}
            lg={4}
            style={{ textAlign: "center" }}
          > 
            <CustomCard user={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
