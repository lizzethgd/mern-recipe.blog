import avatar from "../assets/images/avatar6.png"
import {useContext, useState} from 'react'
import UserService from '../services/UserService';
import {AuthContext} from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

const EditProfile = () => {

const {isAuthenticated, user, setUser} = useContext(AuthContext);
const [updateUser , setUpdateUser] = useState(user)
const [imgUrl, setImgUrl] = useState('')
const history = useNavigate()

const handleChange = e => {
  e.preventDefault()
  setUpdateUser({ ...updateUser, [e.target.id]: e.target.value })
 }

 const handleImage = e => {
  e.preventDefault()
  setImgUrl(URL.createObjectURL(e.target.files[0]))
  setUpdateUser({ ...updateUser, profilePic: e.target.files[0] })
};

const handleSubmit = (e) =>{
  e.preventDefault()
  const formData = new FormData()
  formData.append('_id', updateUser._id)
  formData.append('firstName', updateUser.firstName)
  formData.append('lastName', updateUser.lastName)
  formData.append('email', updateUser.email)
  formData.append('profilePic', updateUser.profilePic )
  console.log(formData)
 UserService.updateProfile(formData, user._id).then(data=> {
    setUser(data.user);
    history('/myprofile')
  }
  ) 
}

const handleEnter = e => {
  e.preventDefault();
  if (e.key.toLowerCase() === "enter") {
    const form = e.target.form;
    const index = [...form].indexOf(e.target);
 /* console.log(index)
    console.log(form) */
    form.elements[index + 1].focus();
  }
};

console.log(user)

return (
<div className=" w3-light-green  w3-center w3-padding-32 w3-padding-top-64">
   <form className="w3-card w3-round w3-light-grey w3-content" onSubmit={handleSubmit} >
    <div className="w3-container">
      <div className="w3-row padd  "  >    
        <div className="w3-col m6 padd "> 
        <h4 className="w3-center">Edit profile</h4>
        <p className="w3-center">
          <img src={imgUrl ? imgUrl : (updateUser.profilePic ? updateUser.profilePic : avatar)}  className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
        <input type="file" name="profilePic" accept=".png, .jpg, .jpeg" onChange={handleImage}/>
        </div>
        <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <p style={{display: "flex"}}><i className="fa-solid fa-user fa-fw w3-margin-top w3-margin-right w3-text-theme " title='Name'/><input className="w3-input w3-border w3-half" type="text" id="firstName" value={updateUser.firstName} onChange={e => handleChange(e)} onKeyDown={handleEnter}/><input className="w3-input w3-border w3-half" type="text" id="lastName"value={updateUser.lastName} onChange={e => handleChange(e)} onKeyDown={handleEnter}/></p>
        <p style={{display: "flex"}}><i className="fa-solid fa-at fa-fw w3-margin-top w3-margin-right w3-text-theme" title='Username'/><input className="w3-input w3-border " type="text" id="username"value={updateUser.username} onChange={e => handleChange(e)} onKeyDown={handleEnter}/></p>
        <p style={{display: "flex"}}><i className="fa-regular fa-envelope fa-fw w3-margin-top w3-margin-right w3-text-theme" title='E-mail'/><input className="w3-input w3-border " type="text" id="email"value={updateUser.email} onChange={e => handleChange(e)} onKeyDown={handleEnter}/></p>
        <Link className="w3-button w3-margin-top w3-round w3-left w3-grey w3-hover-black" to={'/editpassword'}><i className="fa-solid fa-key"/> Change Password</Link>
        </div>
      </div>
      <Link className="w3-button w3-round w3-margin-left w3-right w3-padding-large w3-grey w3-hover-black" to={'/'}><i className="fa-solid fa-ban"/> Cancel</Link> <button className="w3-button w3-round w3-right w3-padding-large w3-deep-orange w3-hover-black"><i className="fa-solid fa-paper-plane"/> Send</button>   
     </div>
        <br/> 
   </form>
</div>
)
}

export default EditProfile
 