import blankRecipe from "../assets/images/blankRecipe.jpg"
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext';
import {createRecipe} from '../services/RecipeService';
import {getCategories } from '../services/CategoryService';
//import {getLanguages } from '../services/LanguageService';
import {getRegions } from '../services/RegionService';
import {Link, useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AddRecipe = () => {

const {user} = useContext(AuthContext)

const { t } = useTranslation("global")

const [categories, setCategories] = useState([])
const [regions, setRegions] = useState([])
//const [languages, setLanguages] = useState([])

const [err, setErr] = useState('')

const navigate = useNavigate() 

const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    serves: '',
    cookTime: [],
    photo: '',
    ingredients: [' ', ' '],
    steps: [' ', ' '],
    author: user._id,
    category: '',
    language: '',
    region: ''
    }) 

const {title, description, serves, cookTime, photo, ingredients, steps, author, category, language, region} = recipe

const [imgUrl, setImgUrl] = useState('')

useEffect(() => {
    (async () => { 
    try{
    const categories =  await getCategories()
        setCategories(categories)
    const regions = await getRegions()
        setRegions(regions)
   /*  const languages = await getLanguages()
        setLanguages(languages) */
    }catch(err){
        console.log('error en addRecipe page: '+err) 
    }
    }) () 
}, []) 

    const handleSubmit = async e  =>{
    e.preventDefault()
   const formData = new FormData()
    formData.append('title', title)
    if (description!=='') formData.append('description', description)
    if (serves!=='') formData.append('serves', serves)
    if (cookTime!==[]) cookTime.forEach(i => formData.append("cookTime[]", i))
    if (photo!=='') formData.append('photo', photo)
    ingredients.forEach(i => formData.append("ingredients[]", i))
    steps.forEach(i => formData.append("steps[]", i))
    formData.append('author', author)
    formData.append('category', category)
    formData.append('language', language)
    formData.append('region', region)
    console.log(formData)
    //await addRecipe(formData)
    await createRecipe(formData)
    .then(data => {data.recipe ? navigate(`/${data.recipe._id}`) :  setErr(data.message)}
    )
}

const handleChange = e => {
    //let value = e.target.id ===  'photo' ? e.target.files[0] : e.target.value
    let value = e.target.value
    setRecipe({ ...recipe, [e.target.id]: value })
}

const handlePhoto = async e =>{
    let value = e.target.files[0] 
    value.size > 1048576 ? setErr('File Size is too large. Allowed file size is 1MBChange') : setErr('')
    setImgUrl(URL.createObjectURL(e.target.files[0]))
    setRecipe({...recipe, photo: value})
}   

const handleChangeCookTime = e =>{
    let values = cookTime
    e.target.id === "hh" ? values[0]=e.target.value :  values[1]=e.target.value
    setRecipe({ ...recipe, cookTime: values })    
}

const handleChangeIngredient = (e, i)=> {
    console.log(recipe)
    let values = ingredients
    values[i] = e.target.value
    setRecipe({ ...recipe,  ingredients: values })
} 

const addIngredient = () => {
    let values = ingredients
    values.push('')
    setRecipe({ ...recipe, ingredients: values })
} 

const delIngredient = (i) => {
    let values = ingredients
    values.splice(i, 1)
    setRecipe({ ...recipe, ingredients: values })
} 

const handleChangeStep = (e, i)=> {
    let values = steps
    values[i] = e.target.value
    setRecipe({ ...recipe,  steps: values })
}

const addStep = () => {
    let values = steps
    values.push('')
    setRecipe({ ...recipe, steps: values  })
} 

const delStep  = (i) => {
    let values = steps
    values.splice(i, 1)
    setRecipe({ ...recipe, steps: values })
} 

const handleEnter = e => {
    if (e.key.toLowerCase() === "enter") {
        const form = e.target.form;
        const index = [...form].indexOf(e.target);
        console.log(index)
        console.log(form)
        form.elements[index + 1].focus();
        e.preventDefault();
    }
    };

const ingredientsInputs = ingredients.map((ingredient, i) =>
    <div key={i} >
        <input className="w3-input w3-padding" id={"ingredient "+i} style={{width:"94%"}} type="text" value={ingredient} onChange={e => handleChangeIngredient(e, i)} onKeyDown={handleEnter}/>
        <div className="w3-button w3-circle w3-right" style={{padding:0}} onClick={() => delIngredient(i)}><i className="fa fa-times-circle" /></div>
    </div>
)

const stepsInputs = steps.map((step, i)=> 
    <li key={i} className="w3-section" style={{paddingBottom: '13px'}}>     
        <textarea className="w3-input" id={"step "+i} type="text" value={step} onChange={e => handleChangeStep(e, i)} onKeyDown={handleEnter}/>
        <div className="w3-button w3-circle w3-right w3-text-black" style={{padding:0}} onClick={() => delStep(i)}><i className="fa fa-times-circle" /></div>
    </li>
)
//console.log(getImageSize(recipe.photo))
console.log(recipe)

return (  
<div className="w3-container w3-light-green w3-padding-top-32 w3-text-white w3-center" >
 
<form  className="w3-padding-16" onSubmit={handleSubmit}>
  
  <div className="w3-content" >
    <h2>{t('recipe.recipe')}</h2> 
    <div className="w3-section">

        <input className="w3-input w3-border" type="text" placeholder={t('recipe.title')} id="title" value={title} onChange={handleChange} onKeyDown={handleEnter} required/>
        <textarea className="w3-input w3-border w3-margin-top" type="text" placeholder={t('recipe.description')}  id="description" value={description} onChange={handleChange} onKeyDown={handleEnter}/>
    
    <div className="w3-section" >

      <div className="w3-half w3-margin-top w3-left-align " style={{paddingLeft: '13vw'}}>
        
        <div className="w3-margin-top" >
        <label><i className="fa-solid fa-users w3-margin-right"/>N° {t('recipe.serves')}: </label > <input className="w3-border" type="number" min="1" max="10" placeholder="nn" style={{width: "4em"}} id="serves" value={serves} onChange={handleChange} onKeyDown={handleEnter}/>
        </div>
        <div className="w3-margin-top">
            <label ><i className="fa-solid fa-stopwatch w3-margin-right"/> {t('recipe.cookTime')}: </label ><input className="w3-border" type="number" min="1" max="30" placeholder="hh" style={{width: "3.5em"}} id="hh" value={cookTime[0]} onChange={handleChangeCookTime} onKeyDown={handleEnter}/><input className="w3-border" type="number" min="1" max="60" placeholder="min" style={{width: "3.5em"}} id="mm" value={cookTime[1]}  onChange={e=> handleChangeCookTime(e)} onKeyDown={handleEnter}/> 
        </div>

        <div className="w3-margin-top" > <i className="fa-solid fa-rectangle-list w3-margin-right"/>
            <select id='category' value={category}  onChange={handleChange} required >
            <option value=''>{t('filter.categories')}</option>
            {categories.map(category =>
                <option key={category._id} value={category._id} >{t(`filter.category.${category.name}`)}</option>
            )}
            </select>
        </div>
        <div className="w3-margin-top "><i className="fa-solid fa-earth-americas w3-margin-right"></i>
            <select id='region' value={region}  onChange={handleChange} required>
            <option value=''>{t('filter.regions')}</option>
            {regions.map(region =>
                <option key={region._id} value={region._id} >{t(`filter.region.${region.name}`)}</option>
            )}
            </select>
        </div>
      </div>

      <div className="w3-half w3-margin-top" style={{paddingBottom: '4vh'}}>
            <p className="w3-center">
            <img src={imgUrl ? imgUrl : blankRecipe}  className="w3-card" style={{width:"300px", height:"200px"}} alt="Avatar"/>
             </p>
            <small style={{fontSize: '15px', width: '30%'}} >{t('recipe.photo')}: </small>
            <input type="file" id='photo' accept=".png, .jpg, .jpeg" onChange={handlePhoto} />
            <span style={{color: 'red'}}>{err}</span>
    </div>
        
    </div>
    
    </div>

  </div>
    
  <div className="w3-row">


        <div className="w3-col m6 padd " >
            <h3 className="w3-center">{t('recipe.ingredients')}</h3>
            <div className="w3-white w3-margin-top" style={{padding:'5px 10px 35px 15px'}} >
                {ingredientsInputs}
            </div>
            <div className="w3-padding-top-16">
                <div className="w3-button w3-white w3-left" onClick={addIngredient}><i className="fa fa-plus"/></div>
            </div>
        </div>
        <div className="w3-col m6 padd " >
            <h3 className="w3-center">{t('recipe.steps')}</h3>
            <ol style={{padding:"0 10px"}}>
                {stepsInputs}
                <div className="w3-button w3-white w3-left fa fa-plus"  onClick={addStep} />
            </ol>
            
        </div>
   </div>
    <div className="w3-center w3-padding-24">
      <button type="submit" className="w3-button w3-round w3-deep-orange" onSubmit={handleSubmit} > <i className="fa fa-paper-plane" /> {t('buttons.publish')} </button>
      <Link className="w3-button w3-round w3-margin-left w3-padding w3-grey w3-hover-black" to={'/'}> <i className="fa-solid fa-ban"/> {t('buttons.cancel')} </Link>
    </div>       
</form>  
</div>
)
}

export default AddRecipe
