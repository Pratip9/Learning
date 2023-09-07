import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    maxWidth: 200
  },
  
});

export default function Traits() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
       
        
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        subheader="CardHeader Example"
      />
    </Card>
  );
}
