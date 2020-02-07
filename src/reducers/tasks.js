import {ADD_TASK, SET_TASK_COUNT, FILTER_ADD_TASK} from '../constants';
import TodoServices from "../components/services/todo-services";

import {addTask, totalTaskCount, filterAddTask} from "../actions/actionCreator";

const todoServices = (new TodoServices());


const initialState ={
    list:[],
    totalTaskCount: null,
}

const tasks = (state =initialState, action) => {

     switch (action.type) {
         case ADD_TASK :
             return {
                    ...state,
                     list: [...state.list.splice(-2, 3), { ...action.taskList}]
             };

         case FILTER_ADD_TASK:
             return {
                 ...state,
                 list:[...action.filterTask]
             };

         case SET_TASK_COUNT: {
             return {
                 ...state,
                 totalTaskCount: action.totalTask
             }
         }

         default:
             return state;
 }
}

export const addTaskTodo = (name, email, text, totalCount) => async (dispatch) => {
     let response = await todoServices.addTodoList(name, email, text);
     if (response.data.status === "ok") {
         let tasksData = response.data.message;    /*one tasks*/
         dispatch(addTask(tasksData));
         dispatch(totalTaskCount(totalCount));
         alert("Task add");
     }else{
         alert("Error");
     }

}

export const getTodoList = (name, param, arg, numerpage ) => async (dispatch) => {
    let response = await todoServices.sortTodoTask(name, param, arg, numerpage);
    if (response.data.status === "ok") {
        let taskList = response.data.message.tasks;
        dispatch(filterAddTask(taskList));
        let totalCount = response.data.message.total_task_count;
        dispatch(totalTaskCount(totalCount));
    }
}

export default tasks;

