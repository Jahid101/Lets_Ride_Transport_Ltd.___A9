import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><strong>Lets Ride Transport Ltd.</strong></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item mr-5">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item active mr-5">
                            <Link class="nav-link active" to="/destination">Destination</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/register">
                            <button class="btn btn-info mr-5">
                                Register
                            </button>
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link active" to="/login" tabindex="-1" aria-disabled="true">
                                <button class="btn btn-success">
                                    Login
                            </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
