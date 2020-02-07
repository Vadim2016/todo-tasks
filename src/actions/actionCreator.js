import {
    ADD_TASK,
    SET_USER_DATA,
    SET_TASK_COUNT,
    SET_NUMER_PAGE,
    EDIT_TODO_TASK,
    SET_STATUS_TASK,
    ENTRY_USER_DATA,
    FILTER_ADD_TASK,
} from '../constants';

export const addTask = (taskList) => ({
  type: ADD_TASK,
   taskList
})

export const filterAddTask = (filterTask) => ({
    type: FILTER_ADD_TASK,
    filterTask
})

export const totalTaskCount = (totalTask) =>  ({
    type: SET_TASK_COUNT,
    totalTask
})

export const setAuthUserData = (login,password,token) => ({
    type: SET_USER_DATA,
    dataLogin:{
        login,
        password,
        token
    }
});

export const setEntryUserName = (nameUser) => ({
    type: ENTRY_USER_DATA,
    nameUser

});

export const getNumPage = (numPage) =>  ({
    type: SET_NUMER_PAGE,
    numPage
})

export const getStatus = (statusTask) =>  ({
    type: SET_STATUS_TASK,
    statusTask
})

export const editTaskList = (editList) =>  ({
    type: EDIT_TODO_TASK,
    editList
})
