import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import MyRecipes from './components/MyRecipes';
import MyFavorites from './components/MyFavorites';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes >
        <Route  exact path="/" element={<Home />} />
        <Route  path="/recipe" element={<Recipe/>} />
        <Route  path="/addrecipe" element={<AddRecipe/>} />
        <Route  path="/myfavorites" element={<MyFavorites/>} />
        <Route  path="/myrecipes" element={<MyRecipes/>} />
        <Route  path="/addrecipe" element={<AddRecipe/>} />
      </Routes >
      <Footer />
    </BrowserRouter>
  );
}

export default App;
