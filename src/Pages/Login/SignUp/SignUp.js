import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useToken from '../../../hooks/useToken';

import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        document.title = "Signup Page Ms-Architect"
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const role = form.role.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        // if (password !== confirm) {
        //     setError('Your Password did not match');
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log('user',user);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, role);
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                    });
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <Form onSubmit={handleSubmit} className='form-items-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control className='form-item' name="name" type="name" placeholder="Enter Full Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='form-item' name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='form-item' name="password" type="password" placeholder="Password" />
                </Form.Group>
                <select
                    name='role'
                    class="form-select" aria-label="Default select example">
                    <option selected>Role</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                </select>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>


    );
};

export default SignUp;