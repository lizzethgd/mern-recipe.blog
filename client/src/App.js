import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
    <Routes >
      <Route index path='/' element={<Home />} />
      <Route path='/mysearch' element={<MySearch  />} />
      <Route path='/:id' element={<Recipe  />} />

    
      <Route index path="/" element={<UnPrivateRoute/>}>
        <Route  path="/login" element={<Login/>} /> 
      </Route>

      <Route element={<PrivateRoute/>}>
        <Route path="/addrecipe" element={<AddRecipe/>} />
        <Route path="/myfavorites" element={<MyFavorites/>} />
        <Route path="/myrecipes" element={<MyRecipes/>} />
        <Route path="/addrecipe" element={<AddRecipe/>} />
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/editpassword" element={<EditPassword/>} />
        <Route path="/editrecipe" element={<EditRecipe/>} />
      </Route>
         
    </Routes >
    <Footer />
  </BrowserRouter>
);
}

export default App;

