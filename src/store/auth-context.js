import React, { useState } from 'react';

export const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    userId: null,
    email: null,
    login: (token, userId, email) => {},
    logout: ()=> {},
    
});
    


export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [email, setEmail] = useState(null)

    const userIsLoggedIn = !!token; 
    

    const loginHandler = (token, userId, email) => {
        
        setToken(token);
        setUserId(userId)
        setEmail(email)

        localStorage.setItem('userId',userId)
        console.log('this is working...')
        console.log(email)
    }

    const logoutHandler = () => {
        setToken(null);
        setUserId(null);
        setEmail(null);

        localStorage.removeItem('user');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userToken');

    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        userId: userId,
        email: email,
        login: loginHandler,
        logout: logoutHandler,
        
    }


    return  <AuthContext.Provider value={contextValue} >
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;