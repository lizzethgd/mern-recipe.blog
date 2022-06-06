import {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext';
import {createRecipe} from '../services/RecipeService';
import { getCategories } from '../services/CategoryService';
import { getLanguages } from '../services/LanguageService';
import { getRegions } from '../services/RegionService';

const AddRecipe = () => {

const {user} = useContext(AuthContext);

const [categories, setCategories] = useState([])
const [regions, setRegions] = useState([])
const [languages, setLanguages] = useState([])

const [err, setErr] = useState('')

const history = useNavigate() 

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

useEffect(() => {
    (async () => { 
    try{
    const categories =  await getCategories()
        setCategories(categories)
    const regions = await getRegions()
        setRegions(regions)
    const languages = await getLanguages()
        setLanguages(languages)
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
    .then(data => {data.recipe ? history(`/${data.recipe._id}`) :  setErr(data.message)}
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
    <div key={i} className="w3-section ">
        <input className="w3-input" id={"ingredient "+i} style={{width:"93%", paddingTop:"0px"}} type="text" value={ingredient} onChange={e => handleChangeIngredient(e, i)} onKeyDown={handleEnter}/>
        <div className="w3-button w3-circle w3-right" style={{padding:0}} onClick={() => delIngredient(i)}><i className="fa fa-times-circle" /></div>
    </div>
)

const stepsInputs = steps.map((step, i)=> 
    <li key={i} className="w3-section w3-large" >     
    <textarea className="w3-input" id={"step "+i} type="text" value={step} onChange={e => handleChangeStep(e, i)} onKeyDown={handleEnter}/>
    <div className="w3-button w3-circle w3-right w3-text-black" style={{padding:0}} onClick={() => delStep(i)}><i className="fa fa-times-circle" /></div>
    </li>
)
//console.log(getImageSize(recipe.photo))
console.log(recipe)

return (
<div className="w3-container w3-light-green w3-text-white" >
 
<form  className="w3-padding" onSubmit={handleSubmit}>
  
  <div className="w3-content w3-padding-large" >
    <h2 className="w3-center">Recipe</h2> 
    <div className="w3-container"><input className="w3-input  w3-border" type="text" placeholder="Title" id="title" value={title} onChange={handleChange} onKeyDown={handleEnter} required/></div>
    <div className="w3-container"><input className="w3-input  w3-border" type="text" placeholder="Description"  id="description" value={description} onChange={handleChange} onKeyDown={handleEnter}/></div>
    <div className=" w3-section w3-row-padding " >
        <div className=" w3-quarter ">
        <label className="w3-border">N° serves: </label > <input className="w3-border" type="number" min="1" max="10" placeholder="nn" style={{width: "4em"}} id="serves" value={serves} onChange={handleChange} onKeyDown={handleEnter}/>
        </div>
        <div className=" w3-quarter ">
            <label >CookTime: </label ><input className="w3-border" type="number" min="1" max="30" placeholder="hh" style={{width: "3.5em"}} id="hh" value={cookTime[0]} onChange={handleChangeCookTime} onKeyDown={handleEnter}/><input className="w3-border" type="number" min="1" max="60" placeholder="min" style={{width: "3.5em"}} id="mm" value={cookTime[1]}  onChange={e=> handleChangeCookTime(e)} onKeyDown={handleEnter}/> 
        </div>
        <div className="w3-quarter w3-center ">
        <label htmlFor="photo" style={{fontSize: "large"}} >Select a image:</label>
        <span style={{color: 'red'}}>{err}</span>
        </div>
        <div className=" w3-quarter w3-center">
            <input type="file" id="photo" accept=".png, .jpg, .jpeg"  onChange={handlePhoto} />
        </div>
    </div>
    <div className=" w3-section w3-row-padding w3-center" >
        <div className="w3-third " > <i className="fa-solid fa-rectangle-list w3-margin-right"/>
            <select id='category' value={category}  onChange={handleChange} required >
            <option value=''>Categories</option>
            {categories.map(category =>
                <option key={category._id} value={category._id} >{category.name}</option>
            )}
            </select>
        </div>
        <div className="w3-third"><i className="fa-solid fa-earth-americas w3-margin-right"></i>
            <select id='region' value={region}  onChange={handleChange} required>
            <option value=''>Regions</option>
            {regions.map(region =>
                <option key={region._id} value={region._id} >{region.name}</option>
            )}
            </select>
        </div>
        <div className="w3-third "><i className="fa-solid fa-language w3-margin-right"></i>
            <select id='language' value={language}  onChange={handleChange} required>
            <option value=''>Languages</option>
            {languages.map(language =>
                <option key={language._id} value={language._id} >{language.name}</option>
            )}
            </select>
        </div>
    </div>
  </div>
    
    <div className="w3-row">

    <div className="w3-half w3-padding-large" >
      <h3 className="w3-center">Ingredients</h3>
       <div style={{padding:"6px 16px"}}> 
        
        <div className=" w3-white w3-padding" >
            {ingredientsInputs}
       
        <div className="w3-section">
            <div className="w3-button" onClick={addIngredient}><i className="fa fa-plus"/></div>
        </div>
       </div>
       
      </div>  
    </div>

    <div className="w3-half w3-padding-large" >
     <h3 className="w3-center">Steps</h3>
     <ol style={{padding:"0px 16px"}}>

     {stepsInputs}
      <div className="w3-button w3-white" onClick={addStep}><i className="fa fa-plus"/></div>
    
     </ol> 
    </div>
    
    </div>
    <div className="w3-center w3-padding-16"><button type="submit" className="w3-button w3-deep-orange" onSubmit={handleSubmit} >Send <i className="fa fa-paper-plane" /></button></div>
</form>  
</div>
)
}

export default AddRecipe
