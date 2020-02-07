import { combineReducers } from 'redux';
import tasks from './tasks';

import auth from "./auth";
import { reducer as formReducer } from 'redux-form';
import edit from "./edit";
import entry from'./entry'

const rootReducer = combineReducers({
    tasks,
    auth,
    edit,
    entry,
    form: formReducer});

export default rootReducer;
