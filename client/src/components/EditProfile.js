import avatar from "../assets/images/avatar6.png"

const EditProfile = ({profile}) => {

  console.log(profile)

return (
<div className=" w3-light-green  w3-center w3-padding-32">
   <div className="w3-card w3-round w3-light-grey  w3-content">
    <div className="w3-container">
      <div className="w3-row padd  "  >    
        <div className="w3-col m6 padd "> 
        <h4 className="w3-center">My Profile</h4>
        <p className="w3-center"><img src={avatar} className="w3-circle" style={{height:"200px", width:"200px"}} alt="Avatar"/></p>
        <input type="file" id="photo" />
        </div>
        <div className="w3-col m6 padd">
        <br/> 
        <br/> 
        <br/> 
        <p ><i className="fa-solid fa-user fa-fw w3-margin-right w3-text-theme"></i><input /></p>
        <p><i className="fa-solid fa-at fa-fw w3-margin-right w3-text-theme"></i> <input /></p>
        <p><i className="fa-solid fa-key fa-fw w3-margin-right w3-text-theme"></i> <input /></p>
        <p><i className="fa-regular fa-envelope fa-fw w3-margin-right w3-text-theme"></i> <input /></p>
        </div>
      </div>
      <button className="w3-button w3-round w3-right w3-padding-large w3-deep-orange w3-hover-black" to="/editprofile"><i className="fa-solid fa-paper-plane"/> Send</button>
     </div>
        <br/> 
   </div>
</div>
)
}

export default EditProfile
 