/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './About.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    height: '95vh',
    marginTop: '3em',
    postion: 'relative',
    "@media (max-width: 600px)": {
      fontSize: "0.72rem",
      marginTop: '0',
    },
    "@media (max-width: 389px)": {
      fontSize: "0.6rem",
      marginTop: '0',
    }
    
  },
  content: {
    width: '70%',
    height: '75vh',
    top: '12.5vh',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'fit-content',
    position: 'relative',
    textAlign: 'justify',
    textDecoration: 'none',
  },
  tag:{
    textDecoration: 'none',
    color: '#fdadfe',
    backgroundColor: 'black',
  },
  slogan: {
    textAlign: 'center',
    
  },
}));

export const About = () => {
  const classes = useStyles();
  

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className={classes.content}>
          <p>TPT was founded with a strong desire to contribute to the development of decentralized networks, and has come a long way since its humble beginnings. Initially starting as a validator during the early Proof-of-Stake days on a now-defunct network, TPT has since established itself as a highly regarded independent blockchain infrastructure provider with a sincere interest in supporting the projects it engages with.
            We have also played a significant role in bringing new networks online from their genesis, providing essential infrastructure support for projects like <a className={classes.tag} href="https://celo.org/">Celo</a>, <a className={classes.tag} href="https://near.org/">Near</a>, <a className={classes.tag} href="https://nymtech.net/"> Nym</a>, and <a className={classes.tag} href="https://sui.io/">Sui</a>. This work has enabled these networks to grow and develop, and we are proud to have contributed to their success.
            <br/>
            <br/>
            TPT is entirely self-funded and has not sought external investment, recognizing the importance of sustainable economics and contributions to the decentralized network space. The company operates on the principle of avoiding unsustainable systems, rejecting the notion of acquiring users and customers through such means.
            <br/>
            <br/>
            As a founding council member of the <a className={classes.tag} href="https://stakingdefense.org/"> Staking Defense League (SDL)</a>, TPT is committed to supporting public goods and devotes significant time and resources to helping community-run projects. This includes assisting with Celo governance, integrating with community-run wallets such as <a className={classes.tag} href="https://taho.xyz/">Taho</a>, and supporting unique initiatives like <a className={classes.tag} href="https://0l.network/">0L</a>.
            <br/>
            <br/>
            TPT is dedicated to making a positive impact in the decentralized network space and firmly believes that every individual has the power to effect change.
            <br/>
            <br/>
            <h1 className={classes.slogan}>Be the change</h1>
          </p>
          
   
        </div>
        <br/>
            <br/>
            <br/>
      </Container>
    </section>
  );
};
