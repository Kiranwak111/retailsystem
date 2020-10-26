import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/Images/image.jpg';
import Common from "./Common"

const About = () => {
    return (
        <>
            <h1 className="text-center mt-2"> Welcome</h1>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;