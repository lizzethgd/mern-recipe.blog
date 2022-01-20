import avatar from "../assets/images/avatar6.png"
import  "../assets/css/comment.scss"
import {NavLink} from 'react-router-dom'

const Recipe = () => {

return (
<div className="w3-container w3-light-green w3-center padd" >

<div className="w3-content w3-center w3-text-white padd" id="about">
    <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="Me" className="w3-image w3-padding" width="600" height="650" />
    <h2 className="w3-center padd">Recipe Title</h2>
    <div className="w3-center w3-large desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</div>
    <div className=" w3-center r-icons">
        <div className="r-icon"><i className="fa-solid fa-users"/> 5 to 6 people</div>
        <div className="r-icon"><i className="fa-solid fa-stopwatch " /> 2h 30min </div> 
        <div className="r-icon"><i className="fa-solid fa-earth-americas "/> Origin </div> 
        <div className="r-icon"><i className="fa-solid fa-rectangle-list" /> Categoria </div>
        <div className="r-icon"><i className="fa-solid fa-language" /> Language </div>
    </div>
</div>

    <div className="w3-row padd  w3-text-white "  >
        
        <div className="w3-col m6 padd ">  
        <h3 className="w3-center">Ingredients</h3>
        <div style={{padding:"6px 16px"}}>
        <div className=" w3-white w3-padding" >
            <div className="w3-section ">
            <input className="w3-input ingredients"  type="text" required name="Name"/>
            </div>
            <div className="w3-section">
            <input className="w3-input ingredients"  type="text" required name="Message"/>
            </div>
            <div className="w3-section">
            <input className="w3-input ingredients"  type="text" required name="2"/>
            </div>
        </div>
        </div>
        </div>
        
        <div className="w3-col m6 padd">
        <h3 className="w3-center">Preparation</h3>
        <ol>
        <li><p className="w3-padding w3-white w3-justify w3-round">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We only use </p></li>
        <li><p className="w3-padding w3-white w3-justify w3-round">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></li>
        </ol>
        </div>
        <NavLink className="w3-button w3-round  w3-padding-large w3-deep-orange w3-hover-black" to="/editrecipe"><i className="fa-solid fa-pen-to-square"/> Edit</NavLink>
    </div>

    <div className="w3-container  w3-center w3-text-white w3-padding-16">  
        Published by <img src={avatar} className="w3-circle a-img"  alt="Avatar" /> User Name on 11/02/21 
        <p  className="w3-large"><i className="fa-regular fa-heart" style={{color: "red"}} /> &nbsp;&nbsp;  <i className="fa-solid fa-share-alt"/> &nbsp;&nbsp; <i className="fa-regular fa-star" style={{color: "blue"}}/></p>
        <div className="w3-container w3-padding-small"/>  
        <hr className="w3-clear" />
    </div>
   
     
       <h4  className="w3-text-white"><i className="fa-solid fa-comments"/> Comments</h4>

    <div className="w3-container padd">

        <div className="w3-container w3-card w3-white w3-round w3-margin w3-padding">
            <img src={avatar} className="w3-left w3-circle w3-margin-right c-img"  alt="Avatar" />
            <div className="w3-left"><span>John Doe</span><span className="w3-opacity">@nickname</span></div>
            <small className="w3-opacity w3-right">1 min</small>
            <span className="w3-justify w3-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>

     <div className="w3-container w3-round w3-padding-16">
        <img src={avatar} className="w3-left w3-circle c-img" style={{margin: "7px 8px 0 16px"}} alt="Avatar" />
        <form className=" w3-white w3-left w3-card w3-round comment-container">
            <textarea type="text"  id="comment" required/>
            <i className=" w3-button  w3-right  w3-hover-white fa-solid fa-paper-plane  button"/>
        </form>
     </div>
    
    </div>

    
    {/*<div className="w3-container w3-card w3-white w3-round w3-margin w3-padding"> 
        <p contenteditable="true" class="w3-border w3-padding">Status: Feeling Blue</p>
        <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button> 
      </div> */}

</div>
    )
}

export default Recipe


