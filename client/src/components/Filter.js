import '../assets/css/filter.scss';
import { useState, useCallback, useEffect } from "react";
import { getCategories } from '../services/CategoryService';
import { getRegions } from '../services/RegionService';
import { useTranslation } from 'react-i18next';

const Filter = ({filters, setFilters}) => {

    const [categories, setCategories] = useState([]);  
    const [regions, setRegions] = useState([]); 

    const { t } = useTranslation("global");

    const initFilters= useCallback(async () => {
        await getCategories().then(categories => 
            setCategories(categories)
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
        setFilters({language: localStorage.i18nextLng, category: 'ND',  region: 'ND'})
    }

   //console.log(filters)
    
return (   
<div className="w3-section w3-padding-16">
    <span className="w3-margin-right">{t("filter.filters")}:</span> 
    <button className="w3-button w3-black" onClick={unfilter}>{t("filter.all")}</button>
    <div className="w3-button w3-white" > <i className="fa-solid fa-rectangle-list w3-margin-right"/>
    <select name='category' value={filters.category}  onChange={handleChange}>
    <option value=''>{t("filter.categories")}</option>
    {categories.map(category =>
        <option key={category._id} value={category._id} >{t(`filter.category.${category.name}`)}</option>
    )}
  </select>
    </div>
    {/* <div className="w3-button w3-white "><i className="fa-solid fa-language w3-margin-right"></i>
    <select name='language' value={filters.language}  onChange={handleChange}>
    <option value=''>Languages</option>
    {languages.map(language =>
        <option key={language._id} value={language._id} >{language.name}</option>
    )}
  </select>
    </div> */}
    <div className="w3-button w3-white"><i className="fa-solid fa-earth-americas w3-margin-right"></i>
    <select name='region' value={filters.region}  onChange={handleChange}>
    <option value=''>{t("filter.regions")}</option>
    {regions.map(region =>
        <option key={region._id} value={region._id} >{region.name}</option>
    )}
  </select>
    </div>
</div> 
    )
}

export default Filter
