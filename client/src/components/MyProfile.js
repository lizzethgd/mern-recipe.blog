import avatar from "../assets/images/avatar6.png"
import {useEffect, useContext, useState} from 'react'
import UserService from '../services/UserService';
import {AuthContext} from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

const MyProfile = () => {

   const {isAuthenticated, user} = useContext(AuthContext);
   const [profile , setProfile] = useState({})
   const history = useNavigate()  

   console.log(user)

  /*  useEffect(() => {
      (async () => { 
         try{
           const data =  await UserService.profile(user)
           console.log(data)
           setProfile(data)
        }catch(err){
           console.log(err)
       }
      }) () 
   }, []); */
   
return (
<div className=" w3-light-green w3-center w3-padding-32 w3-padding-top-64">
 <div className="w3-card w3-round w3-white w3-content">
   <div className="w3-container">
     <div className="w3-row padd  "  >
      <div className="w3-col m6 padd "> 
        <h4 className="w3-center">My Profile</h4>
        <p className="w3-center"><img src={user.profilePic ? user.profilePic : avatar} className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
      </div>
      <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <br/>
        <div className="w3-container w3-margin w3-left-align">
        <p title='Name' ><i className="fa-solid fa-user fa-fw w3-margin-right w3-text-theme" />{user.firstName} {user.lastName}</p>
        <p title='Username' ><i className="fa-solid fa-at fa-fw w3-margin-right w3-text-theme" />{user.username}</p>
        <p title='E-mail'><i className="fa-regular fa-envelope fa-fw w3-margin-right w3-text-theme"/>{user.email}</p>
        </div>
      </div>
    </div>
    <Link className="w3-button w3-round w3-margin-left w3-right w3-padding-large w3-grey w3-hover-black" to={'/'}><i className="fa-solid fa-ban"/> Cancel</Link>  
    <Link className="w3-button w3-round w3-margin-left w3-right w3-padding-large w3-deep-orange w3-hover-black" to={'/editprofile'}><i className="fa-solid fa-user-pen"/> Edit</Link>
     </div>
   <br/> 
 </div>
</div>
)
}

export default MyProfile
