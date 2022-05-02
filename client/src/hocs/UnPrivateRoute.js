import {useContext} from 'react';
import {Navigate,  Outlet} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const UnPrivateRoute = ()=>{
    
    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)
    return(
        !isAuthenticated ? <Outlet />: '' 
    )
}

export default UnPrivateRoute;

