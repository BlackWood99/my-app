import React from 'react'
import { Field, Form } from 'react-final-form'
import Styles from './Styles'

const Login = (props) => {

    let onSubmit = () => {

    }

    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
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

export default Login