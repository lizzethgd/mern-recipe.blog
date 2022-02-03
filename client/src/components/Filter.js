import '../assets/css/filter.scss';
import {useState, useEffect} from 'react';
import { getCategories } from '../services/CategoryService';
import { getLanguages } from '../services/LanguageService';
import { getRegions } from '../services/RegionService';

const Filter = () => {

    const [categories, setCategories] = useState([]);  
    const [languages, setLanguages] = useState([]); 
    const [regions, setRegions] = useState([]); 
    const [category, setCategory] = useState();  
    const [language, setLanguage] = useState(); 
    const [region, setRegion] = useState();  

    useEffect(() => {
        (async () => { 
           try{
             const categories =  await getCategories()
             const languages = await getLanguages()
             const regions = await getRegions()
             setCategories(categories)
             setLanguages(languages)
             setRegions(regions)
          }catch(err){
             console.log(err)
         }
        }) () 
    // }, [sliceData, pagination, pageSize, sibling, currentPage, setTotalPages, setPagesNumeration, setPageSlice]);
    },[categories, languages, regions, setCategories, setLanguages, setRegions])

return (   
<div className="w3-section w3-padding-16">
    <span className="w3-margin-right">Filter:</span> 
    <button className="w3-button w3-black">ALL</button>
    <div className="w3-button w3-white" > <i className="fa-solid fa-rectangle-list w3-margin-right"/>
    <select>
    <option value="0">Categories</option>
    {categories.map(category =>
        <option key={category._id} value={category._id} >{category.name}</option>
    )}
  </select>
    </div>
    <div className="w3-button w3-white "><i className="fa-solid fa-language w3-margin-right"></i>
    <select>
    <option value="0">Languages</option>
    {languages.map(language =>
        <option key={language._id} value={language._id} >{language.name}</option>
    )}
  </select>
    </div>
    <div className="w3-button w3-white"><i className="fa-solid fa-earth-americas w3-margin-right"></i>
    <select>
    <option value="0">Regions</option>
    {regions.map(region =>
        <option key={region._id} value={region._id} >{region.name}</option>
    )}
  </select>
    </div>
</div> 
    )
}

export default Filter
