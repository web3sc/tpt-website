import React from "react";
import { Link, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";
import  Logo  from "../../assets/TPT_transparent_text.png";

const useStyles = makeStyles((theme) => ({
  svg: {
    position: "fixed",
    width: "150px",
    height: "150px",
    top: theme.spacing(2),
    left: theme.spacing(6),
    "@media (max-width: 768px)": {
      width: "150px",
      height: "150px",
      top: theme.spacing(2),
      left: theme.spacing(6),
    },
    "@media (max-width: 500px)": {
      width: "80px",
      height: "80px",
      top: theme.spacing(0.2),
      left: theme.spacing(0.2),
    },
  },
}));

export const LogoLink = () => {
  const classes = useStyles();

  return (

      <Link
          variant="h6"
          href={Resume.basics.url}
          underline="none"
          color="inherit"
          noWrap
          
      >
        <img src={Logo} alt="Logo" className={classes.svg}  />
      </Link>
 
  );
};
