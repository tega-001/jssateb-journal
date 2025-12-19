import React from 'react';

const AuthContext = React.createContext({
    userId: '',
    token: '',
    loggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const loginHandler = () => {
        console.log('LOGGED IN');
    };
    const logoutHandler = () => {
        console.log('LOGGED OUT');
    };

    const contextvalue = {
        userId: '',
        token: '',
        loggedIn: false,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextvalue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
