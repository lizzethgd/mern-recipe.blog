import {useContext} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    
    const { isAuthenticated, user} = useContext(AuthContext);
  
    return(
        !isAuthenticated ? <Navigate to='/login' /> :  <Outlet />  
    )
}

export default PrivateRoute;


