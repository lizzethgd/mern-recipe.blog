import {useContext, useState} from 'react'
import {useNavigate, NavLink, useLocation} from "react-router-dom";
import {authLogout} from '../../src/services/AuthService'
import {AuthContext} from '../../src/context/AuthContext';
import avatar from "../assets/images/blankAvatar.jpg"
import recipebook from "../assets/images/cook-book.png"
import '../assets/css/nav.scss'
import {useTranslation} from 'react-i18next';

const Navigation = () => {

  const location = useLocation();

  const {isAuthenticated, user, setIsAuthenticated, setUser,  filters, setFilters } = useContext(AuthContext);  

  const [search, setSearch] = useState('')

  const { t, i18n } = useTranslation("global");
  
  const [showNav, setShowNav] = useState('')

  //const [showLangs, setShowLangs] = useState('')

   //console.log(i18n.language )

  const history = useNavigate() 
 
/*   useEffect(() => {
    getLanguage(i18n.language).then(language => 
      localStorage.setItem('lang', language) )
  }, [i18n.language])  */ 
  
  const onClickLogoutHandler = async ()=>{
    await authLogout().then(data=>{
       //console.log(data)
         if(data.success){
             setUser(data.user);
             setIsAuthenticated(false);
         }
     });
     history('/')
  }
 
  const openNav= () =>{
     showNav==='block' ? setShowNav('none') : setShowNav('block')
     console.log(showNav)
  }

/* const openLangs= () =>{
    showLangs==='block' ? setShowLangs('none') : setShowLangs('block')
    console.log(showLangs)
 } 
*/

  const handleChange =  e => {
    e.preventDefault();
    setSearch(e.target.value)
  } 

 const handleSubmit = e => {
  e.preventDefault();
  if (search!=='')
  {localStorage.setItem('search', search)
  location.pathname!=='/mysearch'? history('/mysearch') : history(0)}
  } 

  const langChange = e => {
    const code = e.target.name
    i18n.changeLanguage(code)
    setFilters({...filters, language: code}) 
    document.documentElement.setAttribute('lang', code)
   }

  const userNoLogTop = (
    <div className="w3-dropdown-hover w3-right w3-hide-small"> 
      <NavLink className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right w3-hover-white" to="/login"> {t("nav.log")} <i className="fa-solid fa-right-to-bracket"/></NavLink> 
    </div>
  )

  const userLogTop = (
  <>
    <div className="w3-dropdown-hover w3-right w3-hide-small">
    <button className="w3-button w3-padding-large" > <img src={ !user ? avatar : (user.photo ? user.photo : avatar ) } className="w3-circle" style={{border: "2px solid #fff", height:"30px", width:"30px"}} alt="Avatar" /></button>     
    <div className="w3-dropdown-content w3-card-4 w3-bar-block w3-deep-orange" style={{width: "100px", right: 0}}>
      <NavLink className="w3-bar-item w3-button" to="/myprofile"><i className="fa-solid fa-user" /> {t("nav.myProf")}</NavLink>
      <button className="w3-bar-item w3-button" onClick={onClickLogoutHandler}><i className="fa-solid fa-right-from-bracket" /> {t("nav.out")}</button>
    </div>
    </div>

    <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large" title={t("nav.myFavs")} to="/myfavorites"><i className="fa-solid fa-star"/></NavLink>
    <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large" title={t("nav.myReps")} to="/myrecipes"><i className="fa fa-address-book"/></NavLink>
    <NavLink className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large" title={t("nav.add")} to="/addrecipe"><i className="fa fa-plus-square"/></NavLink>
  </>
  )

  const userLinksAcordeon = (
  <>
    <NavLink className="w3-bar-item w3-button w3-padding-large" to="/myfavorites"><i className="fa-solid fa-star"/> {t("nav.myFavs")}</NavLink>
    <NavLink className="w3-bar-item w3-button w3-padding-large"  to="/myrecipes"><i className="fa fa-address-book"/> {t("nav.myReps")}</NavLink>
    <NavLink className="w3-bar-item w3-button w3-padding-large"  to="/addrecipe"><i className="fa fa-plus-square"/> {t("nav.add")}</NavLink>
    <NavLink className="w3-bar-item w3-button w3-padding-large" to="/myprofile"><i className="fa-solid fa-user" /> {t("nav.myProf")}</NavLink>
    <button className="w3-bar-item w3-button w3-padding-large" onClick={onClickLogoutHandler}><i className="fa-solid fa-right-from-bracket"/> {t("nav.out")}</button>
  </>
    )

  const languagesSet = (
    <>
    <button className="w3-button w3-padding-large" ><i className='fa-solid fa-globe'/></button>
     <div className="w3-dropdown-content w3-card-4 w3-bar-block w3-deep-orange" /* style={{display: showLangs}} */>
      <button className="w3-bar-item w3-button" name="en" onClick={langChange}>🇬🇧 English</button>
      <button className="w3-bar-item w3-button" name="fi" onClick={langChange}>🇫🇮 Suomi</button>
      <button className="w3-bar-item w3-button" name="es" onClick={langChange}>🇪🇸 Español</button>
    </div>
    </> 
  )  

return (
<div  >

{/*  <!-- Navbar --> */}
  <div className="w3-top" style={{zIndex: 2}}>
  <div className="w3-bar w3-deep-orange w3-left-align w3-large" >

  <div className="w3-right ">
    <button className="w3-button w3-padding-large w3-deep-orange w3-right w3-hide-medium w3-hide-large" onClick={openNav}><i className="fa fa-bars"/></button>
    <div className='w3-dropdown-content w3-card-4 w3-bar-block w3-theme-d2' style={{top: "50px", right: 0, display: showNav, width: '100%'}}>
      <div className="w3-bar-item w3-button w3-padding-large w3-padding-top-24 search-container ">
        <input type="text" placeholder={t("nav.search")} id="search" onChange={handleChange} required/>
        <button className="w3-button w3-hover-white fa-solid fa-magnifying-glass button" onClick={handleSubmit} />
      </div>
    { !isAuthenticated ? <NavLink className="w3-bar-item w3-button w3-padding-large" to="/login"> {t("nav.log")} <i className="fa-solid fa-right-to-bracket"/></NavLink>  : userLinksAcordeon }
    </div>
  </div> 

    <NavLink  className="w3-bar-item w3-button w3-deep-orange" title={t("nav.home")} to="/"><img src={recipebook} style={{padding:0, height:"35px", width:"35px"}} alt="recipebook" /> <b>RecipePad</b></NavLink>
   { !isAuthenticated ?  userNoLogTop : userLogTop }
   
   <div className="w3-dropdown-hover w3-right" >
    {languagesSet} 
  </div>

 {/*  <div className="w3-right w3-hide-medium w3-hide-large" onClick={openLangs}>
    {languagesSet} 
  </div> */}

    <div className="w3-bar-item w3-right w3-hide-small search-container ">
      <input type="text" placeholder={t("nav.search")}  onChange={handleChange} required/>
      <button className="w3-bar-item  w3-button w3-hide-small w3-right  w3-hover-white fa-solid fa-magnifying-glass button" onClick={handleSubmit} />
    </div>
  </div>
  </div>

  {/* <!-- Navbar on small screens --> */}
{/*   <div id="navDemo" className="w3-dropdown-click w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large" style={{zIndex: 2}} >
    <div className="w3-bar-item w3-padding-large w3-padding-top-64 w3-button search-container ">
      <input type="text" placeholder="Search recipe..  " id="search" onChange={handleChange} required/>
      <button className="w3-button w3-hover-white fa-solid fa-magnifying-glass button" onClick={handleSubmit} />
    </div>
    { !isAuthenticated ? <NavLink className="w3-bar-item w3-button w3-padding-large" to="/login"> Login / Register <i className="fa-solid fa-right-to-bracket"/></NavLink>  : userLinksAcordeon }
  </div> */}
  
</div>
    )
}

export default Navigation
