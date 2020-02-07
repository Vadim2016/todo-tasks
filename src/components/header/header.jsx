import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";

const  Header = (props) => {
    return(
        <header  className="header">
            <ul>
                    { props.auth.token ?
                          <li className="header-login">
                           <span>{props.auth.login}</span>
                            <span>
                                <button className="btn btn-link" onClick={props.logoutData}>
                                     Log out
                                 </button>
                            </span>
                          </li>
                        :  <li className="header-login">
                              <NavLink to={'/login'}> Sign In </NavLink>
                           </li>
                    }
            </ul>
         </header>
    )
 }

export default Header;