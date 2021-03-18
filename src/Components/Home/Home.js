import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    return (
        <div className="container">
            <h3 className="text-center mt-3">Let's Ride Transport Ltd.</h3>
            <Navbar></Navbar>
            <Card></Card>
        </div>
    );
};

export default Home;
