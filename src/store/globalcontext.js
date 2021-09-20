import React, {useState, createContext} from 'react';


export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const[authState, setAuthState] = useState({
        id:'',
        isLoggedIn: false,
        email:'',
        token:''
    })

    return(
        <AuthContext.Provider value={[authState, setAuthState]}>
            {props.children}
        </AuthContext.Provider>
    )
}