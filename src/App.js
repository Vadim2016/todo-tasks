import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HeaderComponent from "./containers/header/header"
import ToDo from './containers/todo/todo';
import Title from './components/title/title';
import LoginForm from "./components/login/login";
import EntryForm from "./components/entry/entry";


const App = () => (
    <Router>
        <Switch>
            <Route path="/todo"
                 render={() =>
                     <Fragment>
                         <HeaderComponent />
                         <Title title="ToDo App" />
                         <ToDo />
                     </Fragment>}
                 exact />
            <Route path="/login"
               render={() => (
                 <LoginForm/>
             )} />
            <Route path="/"
                   render={() => (
                       <EntryForm/>
                   )} />
        </Switch>
    </Router>
);

export default App;
