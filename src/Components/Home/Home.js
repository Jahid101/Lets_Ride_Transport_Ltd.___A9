import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import fakeData from '../FakeData.json';

const Home = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        setVehicles(fakeData)
    }, [])

    return (
        <div className="container">
            <Navbar></Navbar>
            {
                vehicles.map(vehicle => <Card vehicle = {vehicle}></Card>)
            }
        </div>
    );
};

export default Home;
