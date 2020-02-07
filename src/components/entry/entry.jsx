import React from 'react'
import {reduxForm } from 'redux-form'
import { minLengthCreator, required} from "../../utils/vlidators/validators";
import {creatField, InputName} from "../common/FormsControl/FormsControls";

import {connect} from "react-redux";
import './entry.css';

import {Redirect} from "react-router-dom";

import {EntryData} from "../../reducers/entry";


const minLength3= minLengthCreator(3);

const EntryForm = ({handleSubmit}) => {
    return (
        <form className="form-login" onSubmit={handleSubmit}>

            <div className="form-group">
                <label>Name</label>
                {creatField("name",InputName,"name",[ required, minLength3],"Name")}
            </div>

            <button className="btn btn-primary login-submit"> Entry </button>
        </form>
    )
}

const EntryReduxForm = reduxForm({form: 'entry'})(EntryForm);

const Entry =(props) => {

    const onSubmit = (formData) => {
        props.EntryData(formData.name,"username","page",1);
    }

    if (props.entry.name) {
        return <Redirect to = {"/todo"} />
    }

    return(
        <div className="row">
            <div className="col-md-6 col-xs-12 offset-md-3 mt-5">
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3>Entry</h3>
                    </div>
                    <div className="card-body">
                        <EntryReduxForm onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(({ entry }) => ({
    entry
}), { EntryData })(Entry);

