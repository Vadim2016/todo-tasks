import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import {addTaskTodo, getTodoList} from "../../reducers/tasks";
import {editTodoList} from "../../reducers/edit";

import './todo.css';

class ToDo extends Component {

    render() {

        /*name User*/
        const Name = this.props.entry.name;
       /* addTask*/
        const addTaskTodo =this.props.addTaskTodo;
        /*list of filtered tasks*/
        const getTodoList= this.props.getTodoList;

        /*list all tasks*/
        let tasksList = this.props.tasks.list;

        /*token*/
        const token = this.props.auth.token;
        /*editTasks*/
        const editTodoList = this.props.editTodoList;

        const tasksForm = this.props.form;
        const onStatusChanged = this.props.status;

       /** Number of pages количество страниц*/
        let tasksCountPage = this.props.tasks.totalTaskCount;
       /* List Add Task*/
        const isTasksExist = tasksList.length > 0;


            return (
                <div className="todo-wrapper" >
                    <ToDoInput
                                name={Name} addTaskTodo={addTaskTodo}
                                 tasksCountPage={tasksCountPage}/>

                    {isTasksExist && <ToDoList
                                               tasksList={tasksList} editTodoList={editTodoList}
                                               token={token} onStatusChanged={onStatusChanged}
                                               getTodoList={getTodoList}

                    />}

                    {isTasksExist && <Footer
                                             name={Name} tasksCountPage={tasksCountPage}
                                             tasksForm={tasksForm}
                                             getTodoList={getTodoList}
                    />}
                </div>
            );


    };
}


export default connect(({ tasks, auth, entry, numer, edit }) => ({
    tasks, auth,  entry,
    numer, edit
}), { getTodoList,editTodoList,
    addTaskTodo })(ToDo);





