import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><strong>Lets Ride Transport Ltd.</strong></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item mr-5">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link active" href="/destination">Destination</a>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-info mr-5">
                                <a class="nav-link active" href="/register">Register</a>
                            </button>
                        </li>
                        <li class="nav-item active">
                            <button class="btn btn-success">
                                <a class="nav-link active" href="/login" tabindex="-1" aria-disabled="true">Login</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
