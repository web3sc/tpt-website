import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  footerText: {

    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    alignItems: 'center',
    textAlign: 'center',
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
    "@media (max-width: 389px)": {
      fontSize: "0.6rem",
    }

  },
  w3text:{
    fontFamily: 'Sacramento, cursive',
    fontSize: '2rem',
  }
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href= {`https://www.web3socialcapital.xyz`}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
  <p>Made with <span role="img">❤️</span> by <span className={classes.w3text}> w3sc</span></p>

    </Link>
  );
};
