import {SET_USER_DATA} from "../constants";
import TodoServices from "../components/services/todo-services";
import {setAuthUserData} from "../actions/actionCreator";

const todoServices = (new TodoServices());

let initialState ={
    login: null,
    password: null,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USER_DATA :
            return {
            ...state,
            ...action.dataLogin
        }
        default:
            return state;
    }
}

export const loginData = (name, login, password) => async (dispatch) => {
    let response = await todoServices.userLogin(name,login, password);
    if (response.data.status === "ok") {
        let token = response.data.message.token;
        dispatch(setAuthUserData(login, password, token));
    }
}
export const logoutData = () => async (dispatch) => {
        dispatch(setAuthUserData(null, null, null));
    }

export default authReducer;

