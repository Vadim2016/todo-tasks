import React from 'react';
import PropTypes from 'prop-types';
import EditForm from '../todo-item/todo-item';

import './todo-list.css';
import {reduxForm} from "redux-form";


const iD = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const ToDoList = ({ tasksList, editTodoList, token, onStatusChanged }) => {

    const onSubmitEdit = (formData) =>{
        if (formData.status) {
            formData.status = 10
        }else{onStatusChanged = 0}
        editTodoList(formData.username, formData.id, token ,formData.text, formData.status);
    };

    return (
        tasksList.map((value, index) =>
            <ul className="todo-list" key={index}>
                <li className="todo-item is-auth" key={index} >
                    <EditReduxForm
                        key={iD()}
                        value ={value}
                        form={`AddTaskForm_${iD()}`}
                        initialValues={value}
                        onSubmit={onSubmitEdit}
                        token={token}
                    />
                </li>
            </ul>
        )
   )
}


let EditReduxForm = reduxForm({
        fields: ["text"],
})(EditForm);



ToDoList.propTypes = {
    tasksList: PropTypes.array
}

ToDoList.defaultProps = {
    tasksList: []
}

export default ToDoList;
