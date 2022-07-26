import avatar from "../assets/images/blankAvatar.jpg"
import "../assets/css/profile.scss"
import {useContext, useState} from 'react'
import {updateProfile} from '../services/UserService'
import {AuthContext} from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const EditPassword = () => {

  const {user, setUser} = useContext(AuthContext);

  const { t } = useTranslation("global")

  const [updateUserPassword, setUpdateUserPassword] = useState({
    currentPassword: '',
    newPassword: '',
    password: ''
  })

  const [passwordsShow, setPasswordsShow] = useState({
    currentPwShow: {typePass: 'password', slash: '-slash' },
    newPwShow: {typePass:'password', slash:'-slash' },
    confirmPwShow: {typePass:'password', slash:'-slash' } 
  });

  const [message, setMessage] =useState('')
  const history = useNavigate()

  const handleChange = e => {
    e.preventDefault()
    //let value = e.target.id ===  'photo' ? e.target.files[0] : e.target.value
     setUpdateUserPassword({ ...updateUserPassword, [e.target.id]: e.target.value })
 }


const showText = e => {
  e.preventDefault()
  console.log( e.target)
  setPasswordsShow({...passwordsShow, [e.target.id]: {typePass: passwordsShow[e.target.id]['typePass']==='password' ? 'text' : 'password', slash: passwordsShow[e.target.id]['slash']==='-slash' ? '' : '-slash'}})
  /* setInputType(inputType==='password' ? 'text' : 'password')
  setEyeSlash(eyeSlash==='-slash' ? '' : '-slash') */
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

const handleSubmit = e =>{
  e.preventDefault()
  try{
   if(updateUserPassword.newPassword===updateUserPassword.password){
    const formData = new FormData()
    formData.append('_id', user._id)
    formData.append('password',  updateUserPassword.password)
    updateProfile( formData, user._id).then(data=> {
    setUser(data.user);
    history('/myprofile')
      })
    }else{setMessage('Confirm password and new password not match')}
  }catch(err)
  {console.log(err)}
  
}

return (
<div className="w3-container w3-light-green w3-center container-profile">
   <form className="w3-round w3-light-grey w3-content w3-card " onSubmit={handleSubmit}>
    <div className="w3-container">
      <div className="w3-row padd  "  >    
        <div className="w3-col m6 padd "> 
        <h4 className="w3-center">{user.firstName+' '+user.lastName}</h4>
        <p className="w3-center"><img src={user.photo ? user.photo : avatar} className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
        </div>
        <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <div className="w3-margin" style={{display: "flex"}}>
          <span>{message}</span>
          <i className="fa-solid fa-unlock-keyhole fa-fw w3-margin-top w3-margin-right w3-text-theme" title=' password'/>
          <div className="w3-border" style={{display: "flex"}} >
            <input className="w3-input" type={passwordsShow.currentPwShow.typePass} id="currentPassword" onChange={handleChange} onKeyDown={handleEnter} placeholder={t('password.current')}/>
            <i className={`fa-solid fa-eye${passwordsShow.currentPwShow.slash} fa-fw w3-input w3-text-theme w3-white `} id='currentPwShow' style={{width: '15%', paddingTop: '12px'}} onClick={showText}/>
          </div>
          </div>
        <div className="w3-margin"  style={{display: "flex"}}>
          <i className="fa-solid fa-lock fa-fw w3-margin-top w3-margin-right w3-text-theme" title='New password'/>
          <div className="w3-border " style={{display: "flex"}}>
            <input className="w3-input" type={passwordsShow.newPwShow.typePass} id="newPassword" onChange={handleChange} onKeyDown={handleEnter} placeholder={t('password.new')}/>
            <i className={`fa-solid fa-eye${passwordsShow.newPwShow.slash}  w3-input w3-text-theme w3-white ` } id='newPwShow' style={{width: '15%', paddingTop: '12px'}} onClick={showText}/>
          </div>
        </div>
        <div className="w3-margin"  style={{display: "flex"}}>
          <i className="fa-solid fa-lock fa-fw w3-margin-top w3-margin-right w3-text-theme" title='New password'/>
          <div className="w3-border" style={{display: "flex"}}>
            <input className="w3-input" type={passwordsShow.confirmPwShow.typePass} id="password" onChange={handleChange} onKeyDown={handleEnter} placeholder={t('password.confirm')}/>
            <i className={`fa-solid fa-eye${passwordsShow.confirmPwShow.slash} w3-input w3-text-theme w3-white`} id='confirmPwShow' style={{width: '15%', paddingTop: '12px'}} onClick={showText}/>
          </div>
        </div>
        </div>
      </div>
      <div className="w3-center w3-padding-24">
        <button className="w3-button w3-round w3-padding w3-deep-orange w3-hover-black"><i className="fa-solid fa-paper-plane"/> {t('buttons.send')}</button>  
        <Link className="w3-button w3-round w3-margin-left w3-padding w3-grey w3-hover-black" to={'/editprofile'}><i className="fa-solid fa-ban"/> {t('buttons.cancel')}</Link>
     </div>
     </div>
        <br/> 
   </form>
</div>
)
}

export default EditPassword
 