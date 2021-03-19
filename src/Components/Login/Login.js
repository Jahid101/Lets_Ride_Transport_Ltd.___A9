import React, { useContext } from 'react';
import './Login.css';
import AnotherLogin from '../AnotherLogin/AnotherLogin';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    

    return (
        <div class="container mt-5">
            <h3 class="text-center">Login</h3>
            <form>
                <div class="mb-3 w-50">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                </div>
                <div class="mb-3 w-50">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary mb-3">Login</button>
                <div>
                    <p><small>Don't have an account?</small> <a href="/register">Register</a></p>
                </div>
                <AnotherLogin></AnotherLogin>
            </form>
        </div>
    );
};

export default Login;
