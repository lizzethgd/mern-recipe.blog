import {useState} from 'react'

const AddRecipe = () => {

    const [categories, setCategories] = useState([])

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        serves: '',
        cookTime: ['', ''],
        photo: '',
        ingredients: [' ', ' '],
        steps: [' ', ' '],
        author: '',
        category: '',
        language: '',
        region: ''
      })  


     const {title, description, serves, cookTime, photo, ingredients, steps, author, category, language, region} = recipe 

     const handleChange = e => {
       let value = e.target.id ===  'photo' ? e.target.files[0] : e.target.value
        setRecipe({ ...recipe, [e.target.id]: value })
    }

    const handleChangeCookTime = e =>{
        let values = cookTime
        e.target.id === "hh" ? values[0]=e.target.value :  values[1]=e.target.value
        setRecipe({ ...recipe, cookTime: values }) 
        
    }

     const handleChangeIngredient = (e, i)=> {
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

     /*  const handleEnter = (e) => {
        if (e.key.toLowerCase() === "enter") {
          const form = e.target.form;
          const index = [...form].indexOf(e.target);
          form.elements[index + 1].focus();
          e.preventDefault();
        }
      };  */ 

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("final")
    }

    const ingredientsInputs = recipe.ingredients.map((ingredient, i) =>
        <div key={i} className="w3-section ">
          <input className="w3-input" id={"ingredient "+i} style={{width:"93%", paddingTop:"0px"}} type="text" value={ingredient} onChange={e => handleChangeIngredient(e, i)} onKeyDown={handleEnter}/>
          <div className="w3-button w3-circle w3-right" style={{padding:0}} onClick={() => delIngredient(i)}><i className="fa fa-times-circle" /></div>
        </div>
    )

    const stepsInputs = recipe.steps.map((step, i)=> 
        <li key={i} className="w3-section w3-large" >     
        <textarea className="w3-input" id={"step "+i} type="text" value={step} onChange={e => handleChangeStep(e, i)} onKeyDown={handleEnter}/>
        <div className="w3-button w3-circle w3-right w3-text-black" style={{padding:0}} onClick={() => delStep(i)}><i className="fa fa-times-circle" /></div>
        </li>
    )



return (
<div className="w3-container w3-light-green w3-text-white" >
 
<form  className="w3-padding" onSubmit={handleSubmit}>
  
  <div className="w3-content w3-padding-large" id="about">
    <h2 className="w3-center">Recipe</h2> 
    <div className="w3-container"><input className="w3-input  w3-border" type="text" placeholder="Title" id="title" value={title} onChange={e => handleChange(e)} onKeyDown={handleEnter} required/></div>
    <div className="w3-container"><input className="w3-input  w3-border" type="text" placeholder="Description"  id="description" value={description} onChange={e => handleChange(e)} onKeyDown={handleEnter}/></div>
    <div className=" w3-section w3-row-padding " >
        <div className=" w3-quarter ">
        <label className="w3-border">N° serves: </label > <input className="w3-border" type="number" type="number" min="1" max="10" placeholder="nn" style={{width: "4em"}} id="serves" value={serves} onChange={e => handleChange(e)} onKeyDown={handleEnter}/>
        </div>
        <div className=" w3-quarter ">
            <label >CookTime: </label ><input className="w3-border" type="number" min="1" max="30" placeholder="hh" style={{width: "3.5em"}} id="hh" value={cookTime[0]} onChange={(e) => handleChangeCookTime(e)} onKeyDown={handleEnter}/><input className="w3-border" type="number" min="1" max="60" placeholder="min" style={{width: "3.5em"}} id="mm" value={cookTime[1]}  onChange={e=> handleChangeCookTime(e)} onKeyDown={handleEnter}/> 
        </div>
        <div className="w3-quarter w3-center ">
        <label htmlFor="photo" style={{fontSize: "large"}} required>Select a image:</label>
        </div>
        <div className=" w3-quarter w3-center">
            <input type="file" id="photo" value={photo} onChange={e => handleChange(e)} onKeyDown={handleEnter}/>
        </div>
    </div>
    <div className=" w3-section w3-row-padding " >
        <div className=" w3-third ">
            <input className="w3-input w3-border " type="text" placeholder="Category" id="category" value={category} onChange={e => handleChange(e)} onKeyDown={handleEnter}/>
        </div>
        <div className=" w3-third ">
            <input className="w3-input w3-border" type="text" placeholder="Region" id="region" value={region} onChange={e => handleChange(e)} onKeyDown={handleEnter}/>
        </div>
        <div className=" w3-third  ">
            <input className="w3-input w3-border " type="text" placeholder="Language" id="language" value={language} onChange={e => handleChange(e)} onKeyDown={handleEnter}/>
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

/* 

const ingredientsInputs = recipe.ingredients.map((ingredient, i) =>
        <div key={i} className="w3-section ">
          <input className="w3-input" style={{width:"93%", paddingTop:"0px"}} type="text" required id={i} value={ingredient} onChange={e => handleChangeIngredients(e, i)}/>
          <button className="w3-button w3-circle w3-right" style={{padding:"0px"}} onClick={delIngredient(i)}><i className="fa fa-times-circle" /></button>
          {console.log(ingredient+" "+i)}
        </div>
    )
    
 setRecipe({ ...recipe,  ingredients: [ingredients[i] = e.target.value] })

const [title, setTitle] = useState()
    const [description, setDescription] = useState() 
    const [serves, setServes] = useState() 
    const [cookTime, setCookTime] = useState() 
    const [photo, setPhoto] = useState() 
    const [ingredients, setIngredients] = useState() 
    const [preparation, setPreparation] = useState() 
    const [author, setAuthor] = useState() 
    const [category, setCategory] = useState() 
    const [language, setLanguage] = useState() 
    const [region, setrRgion] = useState() */