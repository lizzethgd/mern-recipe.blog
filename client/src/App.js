import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import MyRecipes from './components/MyRecipes';
import MyFavorites from './components/MyFavorites';
import MyProfile from './components/MyProfile';
import EditProfile from './components/EditProfile';
import EditRecipe from './components/EditRecipe';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import PrivateRoute from './hocs/PrivateRoute';
import EditPassword from './components/EditPassword';
import MySearch from './components/MySearch';

const App = () => {
  //const params = useParams()
return (
  <BrowserRouter>
    <Navigation />
    <Route exact path="/" component={Home} />  
    <Route path='/mysearch' component={MySearch}  />
    <Route path='/:id' component={Recipe}  />

    <UnPrivateRoute exact path="/login" component={Login} />  

    <PrivateRoute path="/addrecipe" component={AddRecipe} />
    <PrivateRoute path="/myfavorites" component={MyFavorites} />
    <PrivateRoute path="/myrecipes" component={MyRecipes} />
    <PrivateRoute path="/addrecipe" component={AddRecipe} />
    <PrivateRoute path="/myprofile" component={MyProfile} />
    <PrivateRoute path="/editprofile" component={EditProfile} />
    <PrivateRoute path="/editpassword" component={EditPassword} />
    <PrivateRoute path="/editrecipe" component={EditRecipe} />
         
    <Footer />
  </BrowserRouter>
);
}

export default App;
