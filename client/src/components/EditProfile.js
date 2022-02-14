import avatar from "../assets/images/avatar6.png"
import {useEffect, useContext, useState} from 'react'
import AuthService from '../services/AuthService';
import {AuthContext} from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

const EditProfile = () => {

  const {isAuthenticated, user, setUser} = useContext(AuthContext);
  const [updateUser , setUpdateUser] = useState(user)
  const history = useNavigate()


  /* useEffect(() => {
    setUpdateUser(user)
  }, [updateUser]) */

  const handleChange = e => {
    e.preventDefault()
    //let value = e.target.id ===  'photo' ? e.target.files[0] : e.target.value
     setUpdateUser({ ...updateUser, [e.target.id]: e.target.value })
 }

 const handleEnter = e => {

  if (e.key.toLowerCase() === "enter") {
    const form = e.target.form;
    const index = [...form].indexOf(e.target);
    console.log(index)
    console.log(form)
    form.elements[index + 1].focus();
    e.preventDefault();
  }
};

const handleSubmit = (e) =>{
  e.preventDefault()
  AuthService.updateProfile(updateUser, user._id).then(data=> {
    setUser(data.user);
    history('/myprofile')
  }
  )
  
}

return (
<div className=" w3-light-green  w3-center w3-padding-32 w3-padding-top-64">
   <form className="w3-card w3-round w3-light-grey w3-content" onSubmit={handleSubmit}>
    <div className="w3-container">
      <div className="w3-row padd  "  >    
        <div className="w3-col m6 padd "> 
        <h4 className="w3-center">Edit profile</h4>
        <p className="w3-center"><img src={avatar} className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
        <input type="file" id="photo" />
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
 