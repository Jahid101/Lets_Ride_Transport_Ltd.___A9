import React from 'react';
import Map from '../Map/Map';

const DestinationDetails = () => {
    return (
        <div class="d-flex container">
            <div class="shadow-lg rounded mt-4 p-2 w-25">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">From</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">To</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </div>
            <div class="m-5">
                <Map></Map>
            </div>
        </div>
    );
};

export default DestinationDetails;
