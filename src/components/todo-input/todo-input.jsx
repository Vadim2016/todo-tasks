import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';
import {emailCreator, minLengthCreator, required} from "../../utils/vlidators/validators";
import {creatField, InputName} from "../common/FormsControl/FormsControls";
import {reduxForm } from 'redux-form'


const minLength5= minLengthCreator(5);
const email= emailCreator;

const TaskForm = ({ handleSubmit,name }) => {
    return (
        <form className="form-task" onSubmit={handleSubmit}>

           <div className="form-group">
               <span className="taskName">{name}</span>
            </div>

            <div className="form-group">
                {creatField("email",InputName,"taskEmail",[ required, email],"Email")}
            </div>
            <div className="form-group">
                    {creatField("text",InputName,"taskText",[ required, minLength5],"Text")}
            </div>

            <button className="btn btn-light btn-sm"
                     type="submit">
                <i  className="fas fa-plus" />
            </button>
        </form>
    )
}
const TodoTaskReduxForm = reduxForm({form: 'addTaskForm'})(TaskForm);


const ToDoInput = ({ name, addTaskTodo ,tasksCountPage}) => {

    const taskSubmit = (formData) => {
        addTaskTodo( name, formData.taskEmail, formData.taskText, tasksCountPage );
    }
    return(
        <div className="todo-input-wrapper">
            <TodoTaskReduxForm  name={name} onSubmit={taskSubmit} />
        </div>
    )
}


ToDoInput.propTypes = {
   tasksCountPage: PropTypes.string,
   addTaskTodo: PropTypes.func,
   name: PropTypes.string,
}

ToDoInput.defaultProps = {
    tasksCountPage: '0',
    addTaskTodo: () => {},
    name: '',
}

export default ToDoInput;