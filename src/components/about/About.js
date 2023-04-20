/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './About.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    height: '90vh',
    marginTop: '3em',
    "@media (max-width: 500px)": {
      marginBottom: '60%',
    },
    
  },
  content: {
    width: '70%',
    height: '75vh',
    top: '12.5vh',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    textAlign: 'center',
    
    
  },
}));

export const About = () => {
  const classes = useStyles();
  

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className={classes.content}>
          <p>From humble beginnings TPT started as a passion to learn and help be a part of the decentralized future. Originally starting validate in the early POS days on a network that no longer exists.
            <br/>
            <br/>
            We have since established ourselves as a valuable small independant blockchain infracstructure provider who cares about the projects they support. From helping test cutting edge new technology, to bringing online new networks from genesis for networks like Celo, Near, Nym and Sui.
            <br/>
            <br/>
            We are self funded and have not taken any outside investment. We believe that the future of decentralized networks depends on contributions and viable sustainable economics. We dont believe in acquiring customers and users by the creation of unsustainable systems.
            <br/>
            <br/>
            We are a founding council member of SDL(Staking Defense League) and believe in public goods. We spend considerable time helping community run projects be it Celo governance, integrations for Community run wallets like Taho or helping with unique intiatives like 0L.
            <br/>
            <br/>
            <br/>
            <h1>Be the change</h1>
          </p>
   
        </div>
        <br/>
            <br/>
            <br/>
      </Container>
    </section>
  );
};
