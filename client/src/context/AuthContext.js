import {createContext, useState, useEffect} from 'react';
import {checkAuthentication} from '../services/AuthService';

export const AuthContext = createContext({});

export default ({ children }) => {
 
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

   useEffect(()=>{ 
    (async () => { 
        try{
        await checkAuthentication().then(data => {
            console.log(data)
           if (data.user) setUser(data.user) 
           if (data.isAuthenticated) setIsAuthenticated( data.isAuthenticated)
            setIsLoaded(true)
        })
    }catch(err){
        console.log(err)
    }
  }) () 
},[]);
   
//console.log(user, isAuthenticated, isLoaded )

return (
    <div>
        {isLoaded===false ? <h1>Loading... </h1> : 
        <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            { children }
        </AuthContext.Provider>}
    </div>
)
}


