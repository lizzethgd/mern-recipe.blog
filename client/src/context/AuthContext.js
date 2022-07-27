import {createContext, useState, useEffect} from 'react';
import {checkAuthentication} from '../services/AuthService';
import { useTranslation } from 'react-i18next';

export const AuthContext = createContext({});

export default ({ children }) => {
 
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    const { i18n } = useTranslation("global");

    const [filters, setFilters] = useState({
       language: i18n.language,
       category: 'ND',
       region: 'ND'
      }) 

   useEffect(()=>{ 
    checkAuthentication().then(data =>{
        if (data.user) setUser(data.user);
        if (data.isAuthenticated) setIsAuthenticated(data.isAuthenticated)
        setIsLoaded(true);
        })
},[]);

return (
    <div>
        {isLoaded===false ? <h1> Loading... </h1> : 
        <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated, filters, setFilters}}>
            { children }
        </AuthContext.Provider>}
    </div>
)
}


