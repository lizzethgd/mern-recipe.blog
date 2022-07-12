import {useContext} from 'react';
import {Navigate,  Outlet} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const UnPrivateRoute = ()=>{
    
    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)
    return(
        !isAuthenticated ? <Outlet />:  <Navigate to='/' replace/>
          /*    <Route {...rest} render={props =>{
            if(isAuthenticated) 
            return <Navigate to={{ pathname: '/', 
                                        state : {from : props.location}}}/>
        return <Component {...props}/>
        }}/> */
    )
}

export default UnPrivateRoute;

