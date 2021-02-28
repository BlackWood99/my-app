import React from 'react'
import { Field, Form } from 'react-final-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../redux/auth-reducer'
import Styles from './Styles'

const Login = (props) => {

    let onSubmit = (email, password, rememberMe) => {
        props.authLogin(email, password, rememberMe)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <Styles>
            <div className="showError"><span style={{color: 'red'}}>{props.authError}</span></div>
            <Form
                onSubmit={values => onSubmit(values.email, values.password, values.rememberMe)}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        
                        <Field name="email">
                            {({ input, meta }) => (
                            <div>
                                <label>Email</label>
                                <input {...input} type="text" placeholder="Email" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                            <div>
                                <label>Password</label>
                                <input {...input} type="password" placeholder="Password" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <div>
                            <label >Remember me</label>
                            <div>
                                <Field
                                    name="rememberMe"
                                    component="input"
                                    type="checkbox"
                                />{' '}
                            </div>
                        </div>
                            
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </Styles>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isCompleted: state.auth.isCompleted,
        authError: state.auth.authError,
    }
}

export default connect(mapStateToProps, {authLogin})(Login)