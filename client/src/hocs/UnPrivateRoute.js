import {useContext} from 'react';
import {Navigate,  Outlet, useLocation} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const UnPrivateRoute = ({component : Component, ...rest})=>{
    
    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)
    const location = useLocation();

    return(
        isAuthenticated ?  <Navigate to='/' state={{ from: location }} replace/> : <Outlet />
        
    )
}

export default UnPrivateRoute;

