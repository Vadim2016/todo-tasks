import {EDIT_TODO_TASK, SET_STATUS_TASK} from '../constants';
import TodoServices from "../components/services/todo-services";
import {editTaskList, getStatus} from "../actions/actionCreator";

const todoServices = (new TodoServices());

const initialState ={
    resultEdit:'error',
    statusTask: 0,
}

const edit = (state = initialState, action) => {

    switch (action.type) {
        case EDIT_TODO_TASK: {
            return {...state, resultEdit: action.editList}
        }
        case SET_STATUS_TASK: {
            return {
                ...state,
                statusTask: action.statusTask
            }
        }

        default:
            return state;
    }
}

export const editTodoList = (name,id,token,text,status) => async (dispatch) => {
    let response = await todoServices.editTodo(name,id,token,text,status);
    if (response.data.status === "ok") {
        let statusEdit= response.data.status;
        /*status edit*/
        dispatch(editTaskList(statusEdit));
       /* status task*/
        dispatch(getStatus(status));
        alert("edit ok")
    }else{
        alert(response.data.message)
    }
}

export default edit;
