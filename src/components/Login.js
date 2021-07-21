import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
const Login = ({ currentUser, setCurrentUser, action, setAction }) => {
    
    return (
    <div>
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
                    errors.password = 'Password length must be at least 8 characters';
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                axios.get('https://60dff0ba6b689e001788c858.mockapi.io/token')
                .then(response => {
                    setCurrentUser({
                        token: response.data.token,
                        userId: response.data.userId
                    });
                    setAction(action => "Logout");
                })
                .catch(err => {
                    console.log("Error fetching posts: ", err.message);
                });
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <Field className="mb-2" type="email" name="email" placeholder="Email"/>
                    <ErrorMessage name="email" /><br/>
                    <Field className="mb-2" type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password" /><br/>
                    <button className="btn btn-primary btn-small" type="submit" disabled={isSubmitting} >Submit</button>
                </Form>
            )}
        </Formik>
    </div>
    )
}

export default Login;
