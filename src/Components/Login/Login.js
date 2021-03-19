import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import './Login.css';


const Login = () => {
    return (
        <div class="container mt-5">
            <h3 class="text-center">Login</h3>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary mb-3">Login</button>
                <div>
                    <p><small>Don't have an account?</small> <a href="/register">Register</a></p>
                </div>
                <div class="d-flex border w-25 rounded">
                    <img src="https://banner2.cleanpng.com/20180602/hlf/kisspng-google-logo-computer-icons-google-logo-google-plus-5b1303e8bbdfc3.9797805915279728407695.jpg" class="mr-2" alt=""/>
                    <h6>Continue with Google</h6>
                </div>
                <div class="d-flex border w-25 rounded mt-2">
                    <img src="https://banner2.cleanpng.com/20190523/juu/kisspng-github-software-repository-computer-icons-email-5ce6e863973725.5475298415586366436194.jpg" class="mr-2" alt=""/>
                    <h6>Continue with Github</h6>
                </div>
            </form>
        </div>
    );
};

export default Login;
