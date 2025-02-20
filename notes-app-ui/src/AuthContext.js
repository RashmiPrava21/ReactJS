import React, {useState, useEffect, useContext} from 'react';

const AuthContext = React.createContext();

function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const value = [
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    ]

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}