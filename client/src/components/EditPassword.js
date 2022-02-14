import avatar from "../assets/images/avatar6.png"
import {useEffect, useContext, useState} from 'react'
import AuthService from '../services/AuthService';
import {AuthContext} from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'

const EditProfile = () => {

  const {isAuthenticated, user, setUser} = useContext(AuthContext);
  const [ updatePassword , setUpdatePassword] = useState({})
  const [ inputType, setInputType] = useState('password')
  const [ eyeSlash, setEyeSlash] = useState('-slash')
  const history = useNavigate()

  const handleChange = e => {
    e.preventDefault()
    //let value = e.target.id ===  'photo' ? e.target.files[0] : e.target.value
     setUpdatePassword({ ... updatePassword, [e.target.id]: e.target.value })
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
  AuthService.updateProfile( updatePassword, user._id).then(data=> {
    setUser(data.user);
    history('/myprofile')
  }
  )
  
}

const showText = () => {
  setInputType(inputType==='password' ? 'text' : 'password')
  setEyeSlash(eyeSlash==='-slash' ? '' : '-slash')
}

return (
<div className=" w3-light-green  w3-center w3-padding-32 w3-padding-top-64">
   <form className="w3-card w3-round w3-light-grey  w3-content" onSubmit={handleSubmit}>
    <div className="w3-container">
      <div className="w3-row padd  "  >    
        <div className="w3-col m6 padd "> 
        <h4 className="w3-center">{user.firstName+' '+user.lastName}</h4>
        <p className="w3-center"><img src={avatar} className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
        </div>
        <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <br/> 
        <p style={{display: "flex"}}>
          <i className="fa-solid fa-unlock-keyhole fa-fw w3-margin-top w3-margin-right w3-text-theme" title=' password'/>
          <div className="w3-border" style={{display: "flex"}}>
            <input className="w3-input" type={inputType} id="oldPassword" onChange={e => handleChange(e)} onKeyDown={handleEnter} placeholder='Old password'/>
            <i className={`fa-solid fa-eye${eyeSlash} fa-fw w3-input w3-text-theme w3-white `} style={{width: '15%', paddingTop: '12px'}} onClick={showText}/>
          </div>
          </p>
        <p style={{display: "flex"}}>
          <i className="fa-solid fa-lock fa-fw w3-margin-top w3-margin-right w3-text-theme" title='New password'/>
          <div className="w3-border " style={{display: "flex"}}>
            <input className="w3-input" type={inputType} id="username" onChange={e => handleChange(e)} onKeyDown={handleEnter} placeholder='New password'/>
            <i className={`fa-solid fa-eye${eyeSlash}  w3-input w3-text-theme w3-white ` } style={{width: '15%', paddingTop: '12px'}} onClick={showText}/>
          </div>
        </p>
        <p style={{display: "flex"}}>
          <i className="fa-solid fa-lock fa-fw w3-margin-top w3-margin-right w3-text-theme" title='New password'/>
          <div className="w3-border" style={{display: "flex"}}>
            <input className="w3-input" type={inputType} id="email" onChange={e => handleChange(e)} onKeyDown={handleEnter} placeholder='New password again'/>
            <i className={`fa-solid fa-eye${eyeSlash} w3-input w3-text-theme w3-white`} style={{width: '15%', paddingTop: '12px'}} onClick={showText}/>
          </div>
        </p>
        </div>
      </div>
      <Link className="w3-button w3-round w3-margin-left w3-right w3-padding-large w3-grey w3-hover-black" to={'/editprofile'}><i className="fa-solid fa-ban"/> Cancel</Link> <button className="w3-button w3-round w3-right w3-padding-large w3-deep-orange w3-hover-black"><i className="fa-solid fa-paper-plane"/> Send</button>  
     </div>
        <br/> 
   </form>
</div>
)
}

export default EditProfile
 