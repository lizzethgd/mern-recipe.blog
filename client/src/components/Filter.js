import '../assets/css/filter.scss';
import { useState, useCallback, useEffect } from "react";
import { getCategories } from '../services/CategoryService';
import { getLanguages } from '../services/LanguageService';
import { getRegions } from '../services/RegionService';

const Filter = ({filters, setFilters}) => {

    const [categories, setCategories] = useState([]);  
    const [languages, setLanguages] = useState([]); 
    const [regions, setRegions] = useState([]); 

    const initFilters= useCallback(async () => {
        await getCategories().then(categories => 
            setCategories(categories)
        )
        await getLanguages().then(languages => 
            setLanguages(languages)
        )    
        await getRegions().then(regions => 
            setRegions(regions)
        )  
    },[] ) 

     useEffect(() => {
        try{
         initFilters()
       }catch(err){
          console.log(err)
      }
  
  }, [initFilters]);

    const handleChange = e => {
        e.preventDefault();
        setFilters({...filters, [e.target.name]: e.target.value})
    }

   const unfilter = e =>{
         e.preventDefault();
        setFilters({category: 'ND', language: 'ND',region: 'ND'})
   }
    
return (   
<div className="w3-section w3-padding-16">
    <span className="w3-margin-right">Filter:</span> 
    <button className="w3-button w3-black" onClick={unfilter}>ALL</button>
    <div className="w3-button w3-white" > <i className="fa-solid fa-rectangle-list w3-margin-right"/>
    <select name='category' value={filters.category}  onChange={handleChange}>
    <option value=''>Categories</option>
    {categories.map(category =>
        <option key={category._id} value={category._id} >{category.name}</option>
    )}
  </select>
    </div>
    <div className="w3-button w3-white "><i className="fa-solid fa-language w3-margin-right"></i>
    <select name='language' value={filters.language}  onChange={handleChange}>
    <option value=''>Languages</option>
    {languages.map(language =>
        <option key={language._id} value={language._id} >{language.name}</option>
    )}
  </select>
    </div>
    <div className="w3-button w3-white"><i className="fa-solid fa-earth-americas w3-margin-right"></i>
    <select name='region' value={filters.region}  onChange={handleChange}>
    <option value=''>Regions</option>
    {regions.map(region =>
        <option key={region._id} value={region._id} >{region.name}</option>
    )}
  </select>
    </div>
</div> 
    )
}

export default Filter
