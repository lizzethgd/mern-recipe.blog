import avatar from "../assets/images/avatar6.png"
import {NavLink} from 'react-router-dom'

const Navigation = () => {
return (
<div className="w3-theme-l5" style={{paddingBottom:"3.4em"}}>

{/*  <!-- Navbar --> */}
<div className="w3-top" style={{zIndex: 2}}>
 <div className="w3-bar w3-deep-orange w3-left-align w3-large" > 
  <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"  href="javascript:void(0);" onClick="openNav()"><i className="fa fa-bars"></i></a>
  <NavLink  className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-theme-d4" to="/">Logo</NavLink>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
    <img src={avatar} className="w3-circle" style={{border: "2px solid #fff", height:"24px", width:"24px"}} alt="Avatar" />
  </a>
  <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" to="/messages"><i className="fa fa-envelope"></i></NavLink>
  <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe"></i></a>
  <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" to="/addrecipe"><i className="fa fa-plus-square"></i></NavLink>
  <NavLink  className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" to="/"><i className="fa fa-home"></i></NavLink>
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
