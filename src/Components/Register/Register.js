import React, { useState } from 'react';
import AnotherLogin from '../AnotherLogin/AnotherLogin';

const Register = () => {

    const [newUser, setNewUser] = useState(false);

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
            <form className="container w-50">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"><small>We'll never share your email with anyone else.</small></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" />
                </div>
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
                <div>
                    <p><small>Already have an account? </small><a href="/login">login</a></p>
                </div>
                {/* <AnotherLogin></AnotherLogin> */}
            </form>
        </div>
    );
};

export default Register;
