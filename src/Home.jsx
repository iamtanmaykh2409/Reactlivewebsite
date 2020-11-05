import React from 'react';
// import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/pic1.png"
import Common from './Common';

const Home = () =>{
        return(
                <>
                <Common name='Grow Your Bussiness Here'
                imgsrc={web} 
                visit='/service' 
                btname='Get Started'  />
                </> 
        );
}

export default Home;


