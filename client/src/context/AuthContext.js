import {createContext, useState, useEffect} from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext({});

export default ({ children }) => {
 
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

   useEffect(()=>{
    AuthService.checkAuthentication().then(data =>{
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated)
        setIsLoaded(true);
        });
    },[]);
   

    console.log(user, isAuthenticated, isLoaded )

    return (
        <div>
            {isLoaded===false? <h1>Loading... </h1> : 
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}


