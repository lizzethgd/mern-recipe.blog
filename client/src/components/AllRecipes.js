/* import {useState, useEffect, useContext} from 'react';
import {getAllRecipes} from '../services/RecipeService';


const AllRecipes = () => {
    const [recipes,setRecipes] = useState([]);
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);
  
    useEffect(() => {

      const data = getAllRecipes() 
      setRecipes(data)
  
      const range = calculateRange(data, cardsPerPage);
      setTableRange([...range]);
  
      const slice = sliceData(data, page, cardsPerPage);
      setSlice([...slice]);
      // ...
    }, [data, setTableRange, page, setSlice]);
  
  return (
  <div className="w3-container">
      
  <div className="w3-section w3-padding-32">
        <span className="w3-margin-right">Filter:</span> 
        <button className="w3-button w3-black">ALL</button>
        <button className="w3-button w3-white w3-hide-small"><i className="fa-solid fa-rectangle-list w3-margin-right"></i>Category</button>
        <button className="w3-button w3-white w3-hide-small"><i className="fa-solid fa-language w3-margin-right"></i>Language</button>
        <button className="w3-button w3-white w3-hide-small"><i className="fa-solid fa-earth-americas w3-margin-right"></i>Region</button>
  </div>
  
   <div className="cards__container">
      <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2} />
      <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
      <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
      <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
      <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
      <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
  
  </div> 
   
   <div className="w3-padding-32 w3-text-white">    
      <div className="w3-bar">
          <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
          <a href="#" className="w3-bar-item w3-black w3-button">1</a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
    
    </div> 
      )
}

export default AllRecipes
 */