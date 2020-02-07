import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../../components/header/header";
import {setAuthUserData} from "../../actions/actionCreator";
import {logoutData} from "../../reducers/auth";


class HeaderComponent extends Component {

    render() {
        return  (
            <Header {...this.props} />
        )
    }
}

export default connect(({ auth }) => ({
    auth
}), {logoutData, setAuthUserData })(HeaderComponent);
