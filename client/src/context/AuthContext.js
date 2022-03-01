import {createContext, useState, useEffect} from 'react';
import AuthService from '../services/AuthService';

export const AuthContext = createContext({});

export default ({ children }) => {
 
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

   useEffect(()=>{ 
    (async () => { 
        try{
        const data = await AuthService.checkAuthentication()
        //console.log(data.user)
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated)
        setIsLoaded(true);
    }catch(err){
        console.log(err)
    }
  }) () 
},[]);
   
//console.log(user, isAuthenticated, isLoaded )

return (
    <div>
        {isLoaded===false? <h1>Loading... </h1> : 
        <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            { children }
        </AuthContext.Provider>}
    </div>
)
}


