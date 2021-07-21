import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
const Login = ({ currentUser, setCurrentUser }) => {
    
    return (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if(!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 8) {
                    errors.password = 'Password length must be at least 8 charecters';
                }

                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                
                axios.get('https://60dff0ba6b689e001788c858.mockapi.io/token')
                .then(response => {
                    setCurrentUser({
                        token: response.data.token,
                        userId: response.data.userId
                    });
                })
                .catch(err => {
                    console.log("Error fetching posts: ", err.message);
                });
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <Field className="mb-2" type="email" name="email" placeholder="Email"/>
                    <ErrorMessage className="ml-2" name="email" /><br/>
                    <Field className="mb-2" type="password" name="password" placeholder="Password"/>
                    <ErrorMessage className="ml-2" name="password" /><br/>
                    <button type="submit" disabled={isSubmitting} >Submit</button>
                </Form>
            )}
        </Formik>
    </div>
    )
}

export default Login;
