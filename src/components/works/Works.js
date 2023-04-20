/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Sui from '../../assets/networks/sui-logo.png';
import Celo from '../../assets/networks/celo-logo.png';
import OL from '../../assets/networks/0L-logo.png';
import NYM from '../../assets/networks/nym-logo.png';
import Canto from '../../assets/networks/canto-logo.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    height: '100vh',
    marginBottom: "auto",
    backgroundColor: '#FEFDAD',
  },
  content: {
    width: '75%',
    height: '75vh',
    top: '12.5vh',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  project: {
    width: '30%',
    margin: 'auto',
    borderRadius: '50%',
    backgroundColor: 'black',
    "@media (max-width: 500px)": {
      width: '45%',
    },
  },
  imagediv: {
    width: '100%', /* Set width to 100% */
    height: '0', /* Set height to 0 */
    paddingBottom: '100%', /* Set padding-bottom to 100% */
    borderRadius: '50%', /* Set border-radius to 50% */
    position: 'relative', /* Create a positioned parent */
  },
  image: {
    width: '75%',
    marginLeft: '12.5%',
    marginTop: '25%',
    
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Sui', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      url:'https://sui.io/',
      image: `${Sui}`,
    },
    { 
      id: 2,
      title: 'Celo', 
      description: `An advocacy project website built using
      MEAN stack with fact-checking tool to promote actions against
      fake news.`,
      alter: 'VeriTru Project',
      url:'https://celo.org/',
      image: `${Celo}`,
    },
    { 
      id: 3,
      title: '0L', 
      description: `Logistics and Forwarding website built using
      ReactJS to design and develop its front-end.`,
      alter: 'LoFo Project',
      url:'https://0l.network/',
      image: `${OL}`,
    },
    { 
      id: 4,
      title: 'Nym', 
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      url:'https://nymtech.net/',
      image: `${NYM}`,
    },
    { 
      id: 5,
      title: 'Canto', 
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'Startup Project',
      url:'https://canto.io/',
      image: `${Canto}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        <Container className={classes.content}>
        {projects.map((project) => (
          
          <div className={classes.project} key={ project.id }>
          <div div className={classes.imagediv}>
          <a href={project.url}>
            <img src={project.image} alt={project.alter} className={classes.image} />
          </a>
          </div>
          </div>
        
        ))}
        </Container>
      </Container>
    </section>
  );
};
