import React from "react";
import { Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
    "@media (max-width: 768px)": {
      
    },
  },
  heading: {
    marginLeft: theme.spacing(30),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(8),
    }
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '1rem',
    },
  },
  phrase: {
    fontSize: '5rem',
    "@media (max-width: 768px)": {
      fontSize: '3.5rem',
      marginLeft: theme.spacing(15),
    },
    "@media (max-width: 500px)": {
      fontSize: '2.5rem',
      marginLeft: theme.spacing(0),
    },

  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <div component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography className={classes.phrase} >
            <TextDecrypt text={`Values`} />
            <TextDecrypt text={`Aligned`} />
            <TextDecrypt text={`Infrastructure`} />
        </Typography>
      </div>
    </div>
  );
};
