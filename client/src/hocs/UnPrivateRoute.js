import {useContext} from 'react';
import {Navigate,  Outlet, useLocation} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const UnPrivateRoute = ()=>{
    
    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)
    const location = useLocation();

    return(
        !isAuthenticated ? <Outlet />:  <Navigate to='/' state={{ from: location }} replace/>
          /*    <Route {...rest} render={props =>{
            if(isAuthenticated) 
            return <Navigate to={{ pathname: '/', 
                                        state : {from : props.location}}}/>
        return <Component {...props}/>
        }}/> */
    )
}

export default UnPrivateRoute;

