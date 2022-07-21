import avatar from "../assets/images/blankAvatar.jpg"
import "../assets/css/profile.scss"
import {useContext, useState, useEffect, useCallback} from 'react'
import {getMyProfile} from '../services/UserService';
import {AuthContext} from '../context/AuthContext';
import {Link} from 'react-router-dom'

const MyProfile = () => {

  const {user} = useContext(AuthContext);

  const [myProfile, setMyProfile] = useState({})

  //console.log(user)
  //console.log(user._id)

 const initProfile = useCallback( async() => {
    try{
      await getMyProfile(user._id).then(data => {
        //console.log(data)
        setMyProfile(data)})
    }catch(err){
      console.log(`error in initRecipe: ${err}`) }
  }, [user]) ; 

  useEffect(() => {
    try{  
      initProfile() 
    }catch(err){
      console.log('error in the myProfile component: '+err) 
    }
}, [initProfile]) 
   
return (
<div className="w3-container w3-light-green w3-center container-profile">
 <div className="w3-round w3-white w3-content w3-card">
   <div className="w3-container">
     <div className="w3-row padd  "  >
      <div className="w3-col m6 padd "> 
        <h4 className="w3-center">My Profile</h4>
        <p className="w3-center">{myProfile.photo!=='undefined' && myProfile.photo!=='' 
        ? <img src={myProfile.photo} alt='Avatar' className="w3-circle" style={{height:"200px", width:"200px"}} /> 
        : <img src={avatar} alt='Avatar' className="w3-circle" style={{height:"200px", width:"200px"}} /> }</p>
      </div>
      <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <div className="w3-container w3-margin w3-left-align">
        <p title='Name' ><i className="fa-solid fa-user fa-fw w3-margin-right w3-text-theme" />{myProfile.firstName} {myProfile.lastName}</p>
        <p title='Username' ><i className="fa-solid fa-at fa-fw w3-margin-right w3-text-theme" />{myProfile.username}</p>
        <p title='E-mail'><i className="fa-regular fa-envelope fa-fw w3-margin-right w3-text-theme"/>{myProfile.email}</p>
        </div>
      </div>
    </div>
    <div className="w3-center w3-padding-24">
      <Link className="w3-button w3-round w3-padding w3-deep-orange w3-hover-black" to={'/editprofile'}><i className="fa-solid fa-user-pen"/> Edit</Link>
    </div>
  </div> 
   <br/> 
 </div>
</div>
)
}

export default MyProfile
