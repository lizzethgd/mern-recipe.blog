import avatar from "../assets/images/blankAvatar.jpg"
import { useContext} from 'react'
import {AuthContext} from '../context/AuthContext';
import {Link} from 'react-router-dom'

const MyProfile = () => {

   const {user} = useContext(AuthContext);

   console.log(user)
   
return (
<div className="w3-container w3-light-green w3-center w3-padding-16 w3-padding-top-64">
 <div className="w3-round w3-white w3-content w3-card">
   <div className="w3-container">
     <div className="w3-row padd  "  >
      <div className="w3-col m6 padd "> 
        <h4 className="w3-center">My Profile</h4>
        <p className="w3-center"><img src={user.photo ? user.photo : avatar} className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
      </div>
      <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <div className="w3-container w3-margin w3-left-align">
        <p title='Name' ><i className="fa-solid fa-user fa-fw w3-margin-right w3-text-theme" />{user.firstName} {user.lastName}</p>
        <p title='Username' ><i className="fa-solid fa-at fa-fw w3-margin-right w3-text-theme" />{user.username}</p>
        <p title='E-mail'><i className="fa-regular fa-envelope fa-fw w3-margin-right w3-text-theme"/>{user.email}</p>
        </div>
      </div>
    </div>
    <div className="w3-center">
      <Link className="w3-button w3-round w3-padding w3-deep-orange w3-hover-black" to={'/editprofile'}><i className="fa-solid fa-user-pen"/> Edit</Link>
    </div>
  </div> 
   <br/> 
 </div>
</div>
)
}

export default MyProfile
