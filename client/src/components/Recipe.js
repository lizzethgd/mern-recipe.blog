import avatar from "../assets/images/avatar6.png"

const Recipe = () => {

    /* const timepicker = new TimePicker('time', {
        lang: 'en',
        theme: 'dark'
      });
      
      const timeInput = document.getElementById('time');
      
      timepicker.on('change', function(e) {
        
        const value = (e.hour || '00') + ':' + (e.minute || '00');
        e.element.value = value;
      
      }); */

return (
<div className="w3-content w3-light-green" style={{maxWidth:"1100px"}}>

<div className="w3-container  w3-center w3-text-white  w3-padding-16" id="about">
    <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="Me" className="w3-image w3-padding-32" width="600" height="650" />
    <h3><b>Recipe Title</b></h3>
    <div className="w3-content w3-justify" style={{maxWidth: "600px"}}>
    <h4><i className="fa fa-user"> 5 to 6 people</i>  <i className="fa fa-clock-o"> 2h 30min  </i>  <i className="fa fa-globe"> Origin</i>  <i className="fa fa-list-alt"> Categoria </i>  <i className="fa fa-language"> Language</i></h4>
    </div>
</div>

    <div className="w3-row w3-padding-16  w3-text-white "  >
        
        <div className="w3-col m6 w3-padding-large ">  
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
        
        <div className="w3-col m6 w3-padding-large">
        <h3 className="w3-center">About Catering</h3><br/>
        <ol>
        <li><p className="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use </p></li>
        <li><p className="w3-large">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></li>
        </ol>
        </div>

    </div>

    <div className="w3-container w3-light-green w3-center w3-text-white w3-padding-32">  
        Published by <img src={avatar} className="w3-circle" style={{border: "2px solid #fff", height:"24px", width:"24px"}} alt="Avatar" /> User Name on 11/02/21 
        <p  className="w3-large"><i className="fa fa-heart"> 3 </i> &nbsp;&nbsp;  <i className="fa fa-share-alt"> </i> &nbsp;&nbsp; <i className="far fa-bookmark"> </i></p>
        <div className="w3-container w3-padding-small"/>  
    </div>
</div>
    )
}

export default Recipe


 {/*       <div classNameName="recipe_container">
            <div classNameName="top_recipe">
              <div classNameName="image_recipe"></div>
              <div classNameName="ingedients_recipe"></div>
            </div>
            <div classNameName="preparation_recipe">

            </div>
        </div> */ }