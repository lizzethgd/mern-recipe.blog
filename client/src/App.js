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
    <Route exact path='/mysearch' component={MySearch}  />
    <Route exact path='/recipe/:id' component={Recipe}  />

    <UnPrivateRoute exact path="/login" component={Login} />  

    <PrivateRoute exact path="/addrecipe" component={AddRecipe} />
    <PrivateRoute exact path="/myfavorites" component={MyFavorites} />
    <PrivateRoute exact path="/myrecipes" component={MyRecipes} />
    <PrivateRoute exact path="/addrecipe" component={AddRecipe} />
    <PrivateRoute exact path="/myprofile" component={MyProfile} />
    <PrivateRoute exact path="/editprofile" component={EditProfile} />
    <PrivateRoute exact path="/editpassword" component={EditPassword} />
    <PrivateRoute exact path="/editrecipe" component={EditRecipe} />
         
    <Footer />
  </BrowserRouter>
);
}

export default App;
