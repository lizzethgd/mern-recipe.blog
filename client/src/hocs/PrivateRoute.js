import {useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const PrivateRoute = ({component : Component, ...rest})=>{
    
    const { isAuthenticated, user} = useContext(AuthContext);
    console.log(user)
  
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Navigate to={{ pathname: '/login', 
                                       state : {from : props.location}}}/>
            
        return <Component {...props}/>
    }}/>
    )
}

export default PrivateRoute;

