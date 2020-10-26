import React from 'react';
import web from '../src/Images/image.jpg'
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow Your Business with" imgsrc={web} visit="/service" btname="Get Satrted" />
        </>
    );
};

export default Home;