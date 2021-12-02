const Header = () => {
    return (

<div className="w3-container">      
<div className="w3-section w3-bottombar w3-padding-16">
      <span className="w3-margin-right">Filter:</span> 
      <button className="w3-button w3-black">ALL</button>
      <button className="w3-button w3-white"><i className="fa fa-diamond w3-margin-right"></i>Design</button>
      <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Photos</button>
      <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
</div>
</div> 
    )
}

export default Header
