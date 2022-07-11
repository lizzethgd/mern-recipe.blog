import {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import {editRecipe} from '../services/RecipeService';
import { getCategories } from '../services/CategoryService';
import { getLanguages } from '../services/LanguageService';
import { getRegions } from '../services/RegionService';

const EditRecipe = () => {
    const history = useNavigate()
    const location = useLocation()
    const {dispatch} = location.state 

    const [updateRecipe, setUpdateRecipe] = useState({
        title: '',
        description: '',
        serves: '',
        cookTime: [],
        photo: '',
        ingredients: [],
        steps: [],
        category: '',
        language: '',
        region: '',
        })    

    console.log(dispatch)

    const [categories, setCategories] = useState([])
    const [regions, setRegions] = useState([])
    const [languages, setLanguages] = useState([])


     useEffect(() => {
        (async () => { 
           try{   
            setUpdateRecipe(dispatch)     
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
    },[dispatch])

    const {title, description, serves, cookTime, photo, ingredients, steps, category, language, region} = updateRecipe

    console.log(updateRecipe)
    
    const handleSubmit = e =>{
        e.preventDefault()
       const formData = new FormData()
        formData.append('title', title)
        if (description) formData.append('description', description)
        if (serves) formData.append('serves', serves) 
        if (cookTime!==[]) cookTime.forEach(i => formData.append("cookTime[]", i)) 
        if (photo!=='') formData.append('photo', photo)
        ingredients.forEach(i => formData.append("ingredients[]", i))
        steps.forEach(i => formData.append("steps[]", i))
        formData.append('category', category._id)
        formData.append('language', language._id)
        formData.append('region', region._id)
        console.log(formData)
       editRecipe(formData, dispatch._id).then(data=> {
          history(`/${data.id}`)
        }
        )  
    } 
    
     const handleChange = e => {
        //console.log(updateRecipe)
        let value = e.target.value
        setUpdateRecipe({ ...updateRecipe, [e.target.id]: value })
    }

    const handlePhoto = async e =>{
        let value = e.target.files[0] 
        value.size > 1048576 ? setErr('File Size is too large. Allowed file size is 1MBChange') : setErr('')
        setUpdateRecipe({...updateRecipe, photo: value})
    } 

    const handleChangeCookTime = e =>{
        let values = cookTime
        e.target.id === "hh" ? values[0]=e.target.value :  values[1]=e.target.value
        setUpdateRecipe({ ...updateRecipe, cookTime: values }) 
        
    }

     const handleChangeIngredient = (e, i)=> {
        let values = ingredients
        values[i] = e.target.value
        setUpdateRecipe({ ...updateRecipe,  ingredients: values })
    }

    const addIngredient = () => {
        let values = ingredients
        values.push('')
        setUpdateRecipe({ ...updateRecipe, ingredients: values })
    } 

    const delIngredient = (i) => {
        let values = ingredients
        values.splice(i, 1)
        setUpdateRecipe({ ...updateRecipe, ingredients: values })
    } 

    const handleChangeStep = (e, i)=> {
        let values = steps
        values[i] = e.target.value
        setUpdateRecipe({ ...updateRecipe,  steps: values })
  }
    
    const addStep = () => {
        let values = steps
        values.push('')
        setUpdateRecipe({ ...updateRecipe, steps: values  })
    } 

    const delStep  = (i) => {
       let values = steps
        values.splice(i, 1)
        setUpdateRecipe({ ...updateRecipe, steps: values })
    } 

    const [err, setErr] = useState('')

/*     const handleEnter = e => {
        e.preventDefault();
        if (e.key.toLowerCase() === "enter") {
          const form = e.target.form;
          const index = [...form].indexOf(e.target);
          console.log(index)
          console.log(form)
          form.elements[index + 1].focus();
        }
      };
 */
    const ingredientsInputs = updateRecipe.ingredients.map((ingredient, i) =>
        <div key={i} >
          <input className="w3-input w3-padding" id={"ingredient "+i} style={{width:"94%"}} type="text" value={ingredient} onChange={e => handleChangeIngredient(e, i)} />
          <div className="w3-button w3-circle w3-right" style={{padding:0}} onClick={() => delIngredient(i)}><i className="fa fa-times-circle" /></div>
        </div>
    )

    const stepsInputs = updateRecipe.steps.map((step, i)=> 
        <li key={i} className="w3-section" >     
        <textarea className="w3-input" id={"step "+i} type="text" value={step} onChange={e => handleChangeStep(e, i)}/>
        <div className="w3-button w3-circle w3-right w3-text-black" style={{padding:0}} onClick={() => delStep(i)}><i className="fa fa-times-circle" /></div>
        </li>
    )

return (
<div className="w3-container w3-light-green w3-center w3-padding-16 w3-padding-top-64" >
 
    <form  className="w3-padding-16 w3-light-grey w3-card" onSubmit={handleSubmit}>
      
    <div className="w3-content" id="about">     
        <h2 >Recipe</h2> 
        <div className="w3-padding">
            <input className="w3-input  w3-border" type="text" placeholder="Title" id="title" value={title} onChange={e => handleChange(e)}  required/>
            <input className="w3-input  w3-border w3-margin-top" type="text" placeholder="Description"  id="description" value={description} onChange={e => handleChange(e)} />
        </div>
        
        <div className=" w3-section " >
            <div className=" w3-quarter ">
            <label className="w3-border">N° serves: </label > <input className="w3-border" type="number" min="1" max="10" placeholder="nn" style={{width: "4em"}} id="serves" value={serves} onChange={e => handleChange(e)} />
            </div>
            <div className=" w3-third w3-margin-top">
                <label >CookTime: </label ><input className="w3-border" type="number" min="1" max="30" placeholder="hh" style={{width: "3.5em"}} id="hh" value={cookTime[0]} onChange={(e) => handleChangeCookTime(e)} /><input className="w3-border" type="number" min="1" max="60" placeholder="min" style={{width: "3.5em"}} id="mm" value={cookTime[1]}  onChange={e=> handleChangeCookTime(e)} /> 
            </div>
            <div className=" w3-third w3-left w3-margin-top">
            <small style={{fontSize: '15px', width: '30%'}} >Photo:</small>
                <input type="file" id='photo' accept=".png, .jpg, .jpeg" onChange={handlePhoto} />
                <span style={{color: 'red'}}>{err}</span>
            </div>
        </div>

        <div className=" w3-section w3-row-padding w3-center" >
            <div className="w3-button w3-white w3-margin-top" > <i className="fa-solid fa-rectangle-list w3-margin-right"/>
                <select id='category' value={category._id}  onChange={handleChange}>
                {categories.map(category =>
                    <option key={category._id} value={category._id} >{category.name}</option>
                )}
                </select>
            </div>
            <div className="w3-button w3-white w3-margin-top"><i className="fa-solid fa-language w3-margin-right"></i>
                <select id='language' value={language._id}  onChange={handleChange}>
                {languages.map(language =>
                    <option key={language._id} value={language._id} >{language.name}</option>
                )}
                </select>
            </div>
            <div className="w3-button w3-white w3-margin-top"><i className="fa-solid fa-earth-americas w3-margin-right"></i>
                <select id='region' value={region._id}  onChange={handleChange}>
                {regions.map(region =>
                    <option key={region._id} value={region._id} >{region.name}</option>
                )}
                </select>
            </div>
        </div>
    </div>
        
    <div className="w3-row blocks">
    
        <div className="h-block" >
          <h3 className="w3-center">Ingredients</h3>
           <div className=" w3-white w3-margin-top"  style={{padding:"5px 10px 35px 15px"}}> 
                    {ingredientsInputs}
          </div>
          <div className="w3-padding-top-16">
          <div className="w3-button w3-white w3-left" onClick={addIngredient}><i className="fa fa-plus"/></div>
          </div> 
        </div>
    
        <div className="h-block" >
            <h3 className="w3-center">Steps</h3>
            <ol style={{padding:"0px 10px"}}>
                {stepsInputs}
                <div className="w3-button w3-white w3-left fa fa-plus" onClick={addStep}></div>
            </ol> 
        </div>
        
    </div>

    <div className="w3-center w3-padding-24">
            <button type="submit" className="w3-button w3-round w3-deep-orange" onSubmit={handleSubmit} >Send <i className="fa fa-paper-plane" /></button>
            <Link  className="w3-button  w3-round w3-gray" style={{marginLeft: '15px'}} to={`/${dispatch._id}`} > Cancel <i className="fa-solid fa-ban" /></Link>
    </div>

    </form> 

</div>
)
}


export default EditRecipe
