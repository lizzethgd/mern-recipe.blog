import '../assets/css/filter.scss';
import {useState, useEffect} from 'react';
import { getCategories } from '../services/CategoryService';
import { getLanguages } from '../services/LanguageService';
import { getRegions } from '../services/RegionService';

const Filter = ({filters, setFilters}) => {

    const [categories, setCategories] = useState([]);  
    const [languages, setLanguages] = useState([]); 
    const [regions, setRegions] = useState([]); 
   

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
    },[])

    const handleChange = e => {
        e.preventDefault();
        if (e.target.value === 0) {
            setFilters({...filters, [e.target.name]: ''}) 
        }
        setFilters({...filters, [e.target.name]: e.target.value})
    }
    
return (   
<div className="w3-section w3-padding-16">
    <span className="w3-margin-right">Filter:</span> 
    <button className="w3-button w3-black">ALL</button>
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
