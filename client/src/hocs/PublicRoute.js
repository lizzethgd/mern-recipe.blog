import {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const PublicRoute = ()=>{
    
    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)
    return(
        <Outlet />
    )
}

export default PublicRoute;