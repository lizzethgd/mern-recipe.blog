import avatar from "../assets/images/blankAvatar.jpg"
import "../assets/css/profile.scss"
import {useContext, useState, useEffect} from 'react'
import {updateProfile, removePhoto} from '../services/UserService'
import {AuthContext} from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const EditProfile = () => {

const {user, setUser} = useContext(AuthContext)

const { t } = useTranslation("global")

const [updateUser, setUpdateUser] = useState({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  photo: ''
  })   

  useEffect(() => {
    (async () => { 
       try{   
        setUpdateUser(user)     
      }catch(err){
         console.log(err)
     }
    }) () 
},[user])

const [imgUrl, setImgUrl] = useState('')
const history = useNavigate()

const handleChange = e => {
  e.preventDefault()
  setUpdateUser({ ...updateUser, [e.target.id]: e.target.value })
 }

 const handleImage = e => {
  let value = e.target.files[0] 
  if (value.size > 1048576) setErr('File Size is too large. Allowed file size is 1MBChange') 
  setImgUrl(URL.createObjectURL(e.target.files[0]))
  setUpdateUser({ ...updateUser, photo: value })
 }

  const handleSubmit = e =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('firstName', updateUser.firstName)
    formData.append('lastName', updateUser.lastName)
    formData.append('email', updateUser.email)
    if (updateUser.photo!=='') { 
      formData.append('photo', updateUser.photo)
      if (user.photo) localStorage.setItem('photoUrl', user.photo)
    }
    console.log(formData)
    updateProfile(formData, user._id).then(data=> {
      setUser(data.user)
      if (localStorage.photoUrl && data.user.photo !== localStorage.photoUrl) {
          removePhoto(localStorage.photoUrl)
          localStorage.removeItem('photoUrl')
      }
      history('/myprofile')
    }) 
  }

const [err, setErr] = useState('')

console.log(user.photo)
console.log(localStorage.photoUrl)

return (
<div className="w3-container w3-light-green w3-center container-profile">
   <form className="w3-round w3-light-grey w3-content w3-card " onSubmit={handleSubmit} >
    <div className="w3-container">
      <div className="w3-row padd  "  >    
        <div className="w3-col m6 padd "> 
        <h4 className="w3-center">{t('profile.edit')}</h4>
        <p className="w3-center">
          <img src={imgUrl ? imgUrl : (updateUser.photo ? updateUser.photo : avatar)}  className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/>
          {err}
        </p>
        <input type="file" name="photo" accept=".png, .jpg, .jpeg" onChange={handleImage}/>
        </div>
        <div className="w3-col m6 padd">
        <br/> 
        <p style={{display: "flex"}}><i className="fa-solid fa-user fa-fw w3-margin-top w3-margin-right w3-text-theme " title='Name'/><input className="w3-input w3-border w3-half" type="text" id="firstName" value={updateUser.firstName} onChange={e => handleChange(e)} /><input className="w3-input w3-border w3-half" type="text" id="lastName"value={updateUser.lastName} onChange={e => handleChange(e)} /></p>
        <p style={{display: "flex"}}><i className="fa-solid fa-at fa-fw w3-margin-top w3-margin-right w3-text-theme" title='Username'/><input className="w3-input w3-border " type="text" id="username"value={updateUser.username} onChange={e => handleChange(e)} /></p>
        <p style={{display: "flex"}}><i className="fa-regular fa-envelope fa-fw w3-margin-top w3-margin-right w3-text-theme" title='E-mail'/><input className="w3-input w3-border " type="text" id="email"value={updateUser.email} onChange={e => handleChange(e)} /></p>
        <Link className="w3-button w3-margin-top w3-round w3-left w3-grey w3-hover-black" to={'/editpassword'}><i className="fa-solid fa-key"/> {t('profile.change')}</Link>
        </div>
      </div>
      <div className="w3-center w3-padding-24">
      <button className="w3-button w3-round w3-padding w3-deep-orange w3-hover-black"><i className="fa-solid fa-paper-plane"/> {t('buttons.send')}</button>     
      <Link className="w3-button w3-round w3-margin-left w3-padding w3-grey w3-hover-black" to={'/myprofile'}><i className="fa-solid fa-ban"/> {t('buttons.cancel')}</Link>     
      </div>
     </div>
   </form>
</div>
)
}

export default EditProfile
 