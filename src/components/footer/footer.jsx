import React from 'react';

import './footer.css';
import Pagination from "../common/pagination/pagination";

import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";

const SortReduxForm  = ({handleSubmit}) => {
    return (
        <form className="form-params" onSubmit={handleSubmit}>
            <div className="select-group">
                <label>sort param</label>
            </div>
            <div className="select-group">
                <Field name="favoriteSortUser" component="select">
                    <option />
                    <option value="id">by id</option>
                    <option value="username">by name</option>
                    <option value="email">by email</option>
                    <option value="status">by status</option>
                </Field>
            </div>
            <div className="select-group" >
                <label>sort param</label>
            </div>
            <div className="select-group">
                <Field name="favoriteSorParam" component="select">
                    <option />
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </Field>
            </div>
        </form>
    )
}

let  SelectingFormValuesForm  = reduxForm({
    form: 'select',
    initialValues: {
        favoriteSortUser:"username",
        favoriteSorParam:"asc"
    }
})(SortReduxForm );

const Footer = (props) => {

    let tasksNumerPage =props.numPage;

    const onChanged = (formData) => {
        props.getTodoList(props.name, formData.favoriteSortUser ,formData.favoriteSorParam,tasksNumerPage);
    }

    /*const onPageChanged = (numerPage) => {
        let selectBy = (props.form.select.values.favoriteSortUser) ;
        let selectParam = (props.form.select.values.favoriteSorParam );
        props.getTodoList(props.name, selectBy, selectParam, numerPage.p);
        props.numTaskPage(numerPage.p);
    }*/

    return (
        <div className="footer">
             <div className="item_article">
              <Pagination
                  tasksCountPage={props.tasksCountPage}
                  selectForm={props.form.select}
                  name={props.name}
                  getTodoList={props.getTodoList}
                  /*onPageChanged={onPageChanged}*/
                  numPage={tasksNumerPage}/>
             </div>
              <SelectingFormValuesForm  onChange={onChanged}/>
        </div>
        );
    }


export default connect(({form}) => ({form}) )(Footer);




