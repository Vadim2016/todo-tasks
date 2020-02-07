import React from 'react';
import {creatField, Checkbox, InputName, Textarea} from "../common/FormsControl/FormsControls";

import './todo-item.css';


const EditForm = ({handleSubmit, pristine,token, value}) => {

let status= value.status;

    return (
        <form className="form-edit" onSubmit={handleSubmit} >
            <div className="taskId ">
                {creatField("text",InputName,"id")}
            </div>
            <div className={ status  ? 'completed taskName':'taskName'}>
                <label>{value.username}</label>
                {creatField("text",InputName,"username")}
            </div>
            <div className={ status  ? 'completed taskEmail':'taskEmail'}>
                <label>{value.email}</label>
                {creatField("text",InputName,"email" )}
            </div>
            <div className={ status  ? 'completed taskText':'taskText'}>
                <label>{ token  ? creatField("text",Textarea,"text") : value.text}</label>
            </div>
            <div className={ status   ? 'textDone' :'hidden'}>
              <span>done</span>
            </div>
            <div className={ token   ? '' :'hidden'}>
                {creatField("checkbox",Checkbox,"status")}
            </div>
            <div className={ token  ? '' : 'hidden'}>
                <button type="submit" >
                    <i className={ 'marker far fa-edit'}/>
                </button>
            </div>
        </form>
    )
}


export default EditForm;







