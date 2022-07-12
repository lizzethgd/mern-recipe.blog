import {useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const PrivateRoute = ({component : Component, ...rest})=>{
    
    const { isAuthenticated, user} = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
  
    return(
        !isAuthenticated ? <Navigate to='/login' state={{ from: location }} replace /> :  <Outlet />  
    )
}

export default PrivateRoute;

