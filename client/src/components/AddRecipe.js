const AddRecipe = () => {
return (
<div className="w3-container w3-light-green w3-text-white" >
 
<form  className="w3-padding">
    <div className="w3-content w3-padding-large" id="about">
    <h2 className="w3-center">Recipe</h2> 
    <div className="w3-container"><input className="w3-input  w3-border" type="text" placeholder="Title" required name="title" /></div>
    <div className=" w3-section w3-row-padding " >
        <div className=" w3-quarter ">
            <input className="w3-input w3-border " type="number" placeholder="Servers" required name="servers"/>
        </div>
        <div className=" w3-quarter ">
            <input className="w3-input w3-border" type="text" placeholder="Cook time" required name="time"/>
        </div>
        <div className="w3-quarter w3-center ">
        <label for="myfile" style={{fontSize: "large"}} >Select a image:</label>
        </div>
        <div className=" w3-quarter w3-center ">
            <input type="file" id="myfile" name="myfile" />
        </div>
        
        
    </div>
    </div>
    
    <div className="w3-row">

    <div className="w3-half w3-padding-large" >
      <h3 className="w3-center">Ingredients</h3>
       <div style={{padding:"6px 16px"}}>
        <div className=" w3-white w3-padding" >

         <div className="w3-section ">
          <input className="w3-input" style={{width:"100%", paddingTop:"0px"}} type="text" required name="Name"/>
         </div>
         <div className="w3-section">
          <input className="w3-input" style={{width:"100%", paddingTop:"0px"}} type="text" required name="Message"/>
         </div>
         <div className="w3-section">
          <input className="w3-input" style={{width:"100%", paddingTop:"0px"}} type="text" required name="2"/>
         </div>
       </div>
       
      </div>  
    </div>

    <div className="w3-half w3-padding-large" >
     <h3 className="w3-center">Steps</h3>
     <ol style={{padding:"0px 16px"}}>

      <li className="w3-section w3-large">     
       <textarea className="w3-input" type="text" required/>
     </li>
     <li className="w3-section w3-large">   
      <textarea className="w3-input" type="text" required/>
      </li>
      
     </ol> 
    </div>
    
    </div>
    <div className="w3-center w3-padding-16"><button type="submit" className="w3-button w3-deep-orange " >Send <i class="fa fa-paper-plane"></i></button></div>
</form>  
</div>
)
}

export default AddRecipe
