import {useContext, useState} from 'react'
import {useHistory, NavLink, useLocation} from "react-router-dom";
import {authLogout} from '../../src/services/AuthService'
import {AuthContext} from '../../src/context/AuthContext';
import avatar from "../assets/images/blankAvatar.jpg"
import recipebook from "../assets/images/cook-book.png"
import '../assets/css/nav.scss'

const Navigation = () => {

  const location = useLocation();

  const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);  

  const [search, setSearch] = useState('')

  const history = useHistory() 
  
  const onClickLogoutHandler = async ()=>{
    await authLogout().then(data=>{
       console.log(data)
         if(data.success){
             setUser(data.user);
             setIsAuthenticated(false);
         }
     });
     history.push('/')
  }
 
  const openNav= () =>{
       let x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
 
  const handleChange =  e => {
    e.preventDefault();
    setSearch(e.target.value)
  } 

 const handleSubmit = e => {
  e.preventDefault();
  if (search!=='')
  {localStorage.setItem('search', search)
  location.pathname!=='/mysearch'? history('/mysearch') : history(0)}
  } 

  const userNoLogTop = (
    <div className="w3-dropdown-hover w3-right w3-hide-small">
      <NavLink className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right w3-hover-white" to="/login"> Login / Register <i className="fa-solid fa-right-to-bracket"/></NavLink> 
    </div>
  )

  const userLogTop = (
  <>
    <div className="w3-dropdown-hover w3-right w3-hide-small">
    <button className="w3-button w3-padding-large" > <img src={ !user ? avatar : (user.photo ? user.photo : avatar ) } className="w3-circle" style={{border: "2px solid #fff", height:"30px", width:"30px"}} alt="Avatar" /></button>     
    <div className="w3-dropdown-content w3-card-4 w3-bar-block w3-deep-orange" style={{width: "100px", right: 0}}>
      <NavLink className="w3-bar-item w3-button" to="/myprofile"><i className="fa-solid fa-user" /> My profile</NavLink>
      <button className="w3-bar-item w3-button" onClick={onClickLogoutHandler}><i className="fa-solid fa-right-from-bracket" /> LogOut</button>
    </div>
    </div>
    <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My favorites" to="/myfavorites"><i className="fa-solid fa-star"/></NavLink>
    <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My recipes" to="/myrecipes"><i className="fa fa-address-book"/></NavLink>
    <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Add recipe" to="/addrecipe"><i className="fa fa-plus-square"/></NavLink>
  </>
  )

  const userLinksAcordeon = (
  <>
    <NavLink className="w3-bar-item w3-button w3-padding-large" title="My favorites" to="/myfavorites"><i className="fa-solid fa-star"/> My favorites</NavLink>
    <NavLink className="w3-bar-item w3-button w3-padding-large" title="My recipes" to="/myrecipes"><i className="fa fa-address-book"/> My recipes</NavLink>
    <NavLink className="w3-bar-item w3-button w3-padding-large" title="Add recipe" to="/addrecipe"><i className="fa fa-plus-square"/> Add recipe</NavLink>
    <NavLink className="w3-bar-item w3-button w3-padding-large" to="/myprofile"><i className="fa-solid fa-user" /> My profile</NavLink>
    <button className="w3-bar-item w3-button w3-padding-large" onClick={onClickLogoutHandler}><i className="fa-solid fa-right-from-bracket"/> LogOut</button>
  </>
    )

return (
<div  >

{/*  <!-- Navbar --> */}
  <div className="w3-top" style={{zIndex: 2}}>
  <div className="w3-bar w3-deep-orange w3-left-align w3-large" > 
    <button className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-deep-orange"  onClick={openNav}><i className="fa fa-bars"></i></button>
    <NavLink  className="w3-bar-item w3-button w3-deep-orange" title="Home" to="/"><img src={recipebook} style={{padding:0, height:"35px", width:"35px"}} alt="recipebook" /> <b>RecipePad</b></NavLink>
    { !isAuthenticated ?  userNoLogTop : userLogTop }
    <div className="w3-bar-item w3-right w3-hide-small search-container ">
      <input type="text" placeholder="Search recipe..  "  onChange={handleChange} required/>
      <button className="w3-bar-item  w3-button w3-hide-small w3-right  w3-hover-white fa-solid fa-magnifying-glass button" onClick={handleSubmit} />
    </div>
  </div>
  </div>

  {/* <!-- Navbar on small screens --> */}
  <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large" style={{zIndex: 2}} >
    <div className="w3-bar-item w3-padding-large w3-padding-top-64 w3-button search-container ">
      <input type="text" placeholder="Search recipe..  " id="search" onChange={handleChange} required/>
      <button className="w3-button w3-hover-white fa-solid fa-magnifying-glass button" onClick={handleSubmit} />
    </div>
    { !isAuthenticated ? <NavLink className="w3-bar-item w3-button w3-padding-large" to="/login"> Login / Register <i className="fa-solid fa-right-to-bracket"/></NavLink>  : userLinksAcordeon }
  </div>
  
</div>
    )
}

export default Navigation
