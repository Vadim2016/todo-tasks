import {ENTRY_USER_DATA} from "../constants";
import TodoServices from "../components/services/todo-services";
import {filterAddTask, setEntryUserName, totalTaskCount} from "../actions/actionCreator";


const todoServices = (new TodoServices());

let initialState ={
    name:''
}

const entryReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ENTRY_USER_DATA :
            return {
                ...state,
                name: action.nameUser
            }
        default:
            return state;
    }
}



export const EntryData = (name, param, arg, numerpage ) => async (dispatch) => {
    let response = await todoServices.sortTodoTask(name, param, arg, numerpage);
    if (response.data.status === "ok") {
        let taskList = response.data.message.tasks;
        dispatch(setEntryUserName(name));
        dispatch(filterAddTask(taskList));
        let totalCount = response.data.message.total_task_count;
        dispatch(totalTaskCount(totalCount));
    }
}

export default entryReducer;

