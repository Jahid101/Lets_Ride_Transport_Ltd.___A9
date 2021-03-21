import React from 'react';
import { useHistory } from 'react-router';
import './Card.css';

const Card = (props) => {

    const { vehicleImage, vehicleName, vehicleDescription, id } = props.vehicle;

    const history =useHistory();
    
    const handleCardClick = () => {
        history.push(`/destination/${id}`);
    }

    return (
            <div onClick={handleCardClick} class="row row-cols-1 row-cols-md-2 container cardInfo d-flex mt-5">
                <div class="col">
                    <div class="card">
                        <img src={vehicleImage} class="card-img-top" alt="" />
                        <div>
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
