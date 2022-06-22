import {createContext, useState, useEffect} from 'react';
import {checkAuthentication} from '../services/AuthService';

export const AuthContext = createContext({});

export default ({ children }) => {
 
    const [user,setUser] = useState({});
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

   useEffect(()=>{ 
    (async () => { 
        try{
        await checkAuthentication().then(data => {
            setUser(data.user ? data.user : {user: 'guest'})
            setIsAuthenticated(data.isAuthenticated? data.isAuthenticated  : false)
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
        {isLoaded===false? <h1>Loading... </h1> : 
        <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            { children }
        </AuthContext.Provider>}
    </div>
)
}


