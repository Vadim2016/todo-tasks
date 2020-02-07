import React from 'react'
import {reduxForm } from 'redux-form'
import {
    loginCreator,
    minLengthCreator,
    passwordCreator,
    required
} from "../../utils/vlidators/validators";
import {creatField, InputName} from "../common/FormsControl/FormsControls";

import {connect} from "react-redux";
import './login.css';
import {loginData} from "../../reducers/auth";
import {Redirect} from "react-router-dom";
import {editTodoList} from "../../reducers/edit";


const minLength5= minLengthCreator(5);
const minLength3= minLengthCreator(3);
const login = loginCreator;
const password = passwordCreator;

const LoginForm = ({handleSubmit}) => {
    return (
           <form className="form-login" onSubmit={handleSubmit}>

            <div className="form-group">
                <label>Login</label>
                {creatField("login",InputName,"login",[ required, minLength5,login],"Login")}
            </div>
            <div className="form-group">
                <label>Password</label>
                   {creatField("password",InputName,"password",[ required , minLength3,password],"Password")}
            </div>

            <button className="btn btn-primary login-submit"> Send </button>
        </form>
        )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login =(props) => {

    const name = props.entry.name;

    const onSubmit = (formData) => {
        props.loginData(name, formData.login, formData.password);
    }

   if (props.auth.token) {
      return <Redirect to = {"/todo"} />
    }

    return(
            <div className="row">
                <div className="col-md-6 col-xs-12 offset-md-3 mt-5">
                    <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            <LoginReduxForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )

}


export default connect(({ auth, entry}) => ({
    auth,entry
}), {loginData, editTodoList })(Login);
