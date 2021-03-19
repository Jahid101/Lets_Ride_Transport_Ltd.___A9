import React, { useContext, useState } from 'react';
import './Login.css';
import AnotherLogin from '../AnotherLogin/AnotherLogin';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";


const Login = () => {

    const [newUser, setNewUser] = useState(true);
    

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    const handleBlur = (e) => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        console.log(e.target.name, e.target.value);
    }


    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
                user.error = '';
                user.success = true;
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }


    return (
        <div class="container mt-5">
            <h3 class="text-center">Login</h3>
            <form onSubmit={handleLogin}>
                <div class="mb-3 w-50">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" onBlur={handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                </div>
                <div class="mb-3 w-50">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" onBlur={handleBlur} class="form-control" id="exampleInputPassword1" required />
                </div>
                <input class="btn btn-primary mb-3" type="submit" value="Login" />
            </form>
            <div>
                <p><small>Don't have an account?</small> <a href="/register">Register</a></p>
            </div>
            <AnotherLogin></AnotherLogin>
        </div>
    );
};

export default Login;
