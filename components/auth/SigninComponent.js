import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import React from 'react';

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    if ( isAuth() ) {
                        Router.push(`/discover`);
                    }
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info" style={{'marginLeft':'5%','marginRight':'5%'}}>Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger p-3" style={{'marginLeft':'5%','marginRight':'5%'}}>{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info" style={{'marginLeft':'5%','marginRight':'5%'}}>{message}</div> : '');

    const signinForm = () => {
        return (
            <div>
            <form onSubmit={handleSubmit} >
                <div className="form-group p-3">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="form-group  p-3">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                <div className='text-center p-3 pb-4'>
                    <button className="btn btn-primary" style={{'width':'100%'}}>Signin</button>
                    <div className='pt-3'>
                        <div>Don&apos;t have an account?
                        <Link href={'/signup'}>Signup</Link>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        );
    };

    return (
        <>
        <div >
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </div>
        </>
    );
};

export default SigninComponent;
