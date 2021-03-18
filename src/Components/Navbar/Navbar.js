import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mt-5 mb-5">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link active" href="/destination">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Contuct us</a>
                        </li>
                        <li class="nav-item active ml-5">
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
