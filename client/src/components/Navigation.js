import {useContext} from 'react'
import {useNavigate, NavLink } from "react-router-dom";
import AuthService from '../services/AuthService'
import {AuthContext} from '../context/AuthContext';
import avatar from "../assets/images/avatar6.png"
import recipebook from "../assets/images/cook-book.png"
import '../assets/css/nav.scss'

const Navigation = () => {

  const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);  

  //console.log(isAuthenticated +' ' +user,)

  const history = useNavigate() 
  
  const onClickLogoutHandler = async ()=>{
    await AuthService.authLogout().then(data=>{
       console.log(data)
         if(data.success){
             setUser(data.user);
             setIsAuthenticated(false);
         }
     });
     history('/')
  }

  const openNav= () =>{
    console.log("a")
  }

  const userLog = (
  <>
    <button className="w3-button w3-padding-large" > <img src={ !user ? avatar : (user.profilePic ? user.profilePic : avatar ) } className="w3-circle" style={{border: "2px solid #fff", height:"30px", width:"30px"}} alt="Avatar" /></button>     
    <div className="w3-dropdown-content w3-card-4 w3-bar-block w3-deep-orange" style={{width: "100px", right: 0}}>
     <NavLink className="w3-bar-item w3-button" to="/myprofile">Profile</NavLink>
      <button className="w3-bar-item w3-button" onClick={onClickLogoutHandler}>LogOut</button>
    </div>
  </>
  )

  const userNoLog = (
    <>
       <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" to="/login">Login / Register <i className="fa-solid fa-right-to-bracket"/></NavLink>
    </>
    )

  const userLinksTop = (
  <>
  <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My favorites" to="/myfavorites"><i className="fa-solid fa-star"/></NavLink>
  <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My recipes" to="/myrecipes"><i className="fa fa-address-book"/></NavLink>
  <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Add recipe" to="/addrecipe"><i className="fa fa-plus-square"/></NavLink>
  </>
  )

return (
<div className="w3-theme-l5" style={{paddingBottom:"1.9rem"}}>

{/*  <!-- Navbar --> */}
<div className="w3-top" style={{zIndex: 2}}>
 <div className="w3-bar w3-deep-orange w3-left-align w3-large" > 
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"  href="#" onClick={openNav}><i className="fa fa-bars"></i></a>
  <NavLink  className="w3-bar-item w3-button w3-hide-small w3-deep-orange" title="Home" to="/"><img src={recipebook} style={{padding:0, height:"35px", width:"35px"}}/> <b>RecipePad</b></NavLink>
  
  <div className="w3-dropdown-hover w3-right w3-hide-small">
  { !isAuthenticated ? userNoLog : userLog }
  </div>
  
  { !isAuthenticated ? null  : userLinksTop }
  
    <form className="w3-bar-item w3-right  w3-hide-small search-container ">
      <input type="text" placeholder="Search recipe..  " id="search" required/>
      <i className="w3-bar-item  w3-button w3-hide-small w3-right  w3-hover-white fa-solid fa-magnifying-glass button"/>
    </form>
 
 </div>
</div>

{/* <!-- Navbar on small screens --> */}
<div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large" style={{zIndex: 2}}>
  <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
  <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
  <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
  <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
</div>
  
</div>
    )
}

export default Navigation
