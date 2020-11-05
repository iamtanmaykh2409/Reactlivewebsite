import React from 'react';
// import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/pic2.png";
import Common from './Common';

const About = () =>{
        return(
                <>
                <Common name='Welcome to About Page'
                imgsrc={web} 
                visit='/contact' 
                btname='Contact Now'  />
                </>
        );
}

export default About;


