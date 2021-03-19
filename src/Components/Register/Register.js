import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import AnotherLogin from '../AnotherLogin/AnotherLogin';

const Register = () => {

    const [newUser, setNewUser] = useState(true);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
    });



    return (
        <div class="mt-5">
            <h3 class="text-center">Register</h3>
            <form className="container w-50" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" name="name" placeholder="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                    <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required />
                </div>
                <input class="btn btn-primary mb-2" type="submit" value={newUser ? 'Register' : 'Login'} />
            </form>
            <div>
                <p class="container text-center mb-3"><small>Already have an account? </small><a href="/login">login</a></p>
            </div>
        </div>
    );
};

export default Register;
