//app.js

{/* <BrowserRouter>
<Navigation />
<Routes >
  <Route exact path="/" element={<Home />} /> 
  <Route path="/login" element={<UnPrivateRoute component={Login}/>} /> 
  <Route path="/recipe" element={<UnPrivateRoute component={Recipe}/>} /> 
  <Route path="/addrecipe" element={<PrivateRoute component={AddRecipe}/>} />
  <Route path="/myfavorites" element={<PrivateRoute component={MyFavorites}/>} />
  <Route path="/myrecipes" element={<PrivateRoute component={MyRecipes}/>} />
  <Route path="/addrecipe" element={<PrivateRoute component={AddRecipe}/>} />
  <Route path="/myprofile" element={<PrivateRoute component={MyProfile}/>} />
  <Route path="/editprofile" element={<PrivateRoute component={EditProfile}/>} />
  <Route path="/editrecipe" element={<PrivateRoute component={EditRecipe}/>} /> 
</Routes >
<Footer />
</BrowserRouter>
 */}

 //UnPrivateRoute.js

/* import {useContext} from 'react';
import {useLocation, Navigate, Outlet} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const UnPrivateRoute = ({component : Component,...rest})=>{
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();
    console.log(isAuthenticated)
    return(
   !isAuthenticated ? <Component /> :  <Navigate to={{ pathname: '/',  state : {from : location}}}/>
    
    )
}

export default UnPrivateRoute; */

//PrivateRouter.js 

//v0
{/* <Routes>
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Navigate to='/login' state = {{from : location}}/>
            
            if(!roles.includes(user.role))
                return <Navigate to='/' state = {{from : location}}/>
        return <Component {...props}/>
        }}/>
</Routes> */}

//v1
/* import {useContext} from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
    const location = useLocation();
    return(
        !isAuthenticated ? <Navigate to='/login' state = {{from : location}}/> :  <Component />   
    )
}

export default PrivateRoute; */
