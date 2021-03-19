import React from 'react';
import './Card.css';

const Card = (props) => {

    const { vehicleImage, vehicleName, vehicleDescription } = props.vehicle;

    return (
            <div class="row row-cols-1 row-cols-md-2 g-4 abc d-flex mt-5">
                <div class="col">
                    <div class="card">
                        <img src={vehicleImage} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{vehicleName}</h5>
                            <p class="card-text">{vehicleDescription}</p>
                            <button className="btn btn-success">Ride</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Card;
