import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const isLogin = true;
    return (
        <AuthContext.Consumer>
            {({ login })=> 
            // Show the component only when the user is logged in
            // Otherwise, redirect the user to /signin page
                (<Route {...rest} render={props => (
                    login ?
                        <Component {...props} />
                    : <Redirect to="/login" />
                )} />)
            }
        </AuthContext.Consumer>
    );
};

export default PrivateRoute;