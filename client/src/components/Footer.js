import "../assets/css/footer.scss"

const Footer = () => {
return (
<footer className="w3-container container-footer w3-theme-d5">
  
  <div className="w3-center" style={{paddingBottom: 0}}>
    <h4>Lizzeth Garcia</h4>
    <a className="w3-button w3-large" title="Linkedin" href="https://www.linkedin.com/in/lizzeth-garcia-27b841b4" target="_blank"><i className="fa-brands fa-linkedin" /></a>
    <a className="w3-button w3-large" title="Github" href="https://github.com/lizzethgd" target="_blank"><i className="fa-brands fa-github" /></a>
    <a className="w3-button w3-large" title="Instagram" href="https://www.instagram.com/lizzethgd.dev" target="_blank"><i className="fa-brands fa-instagram" /></a>
    <a className="w3-button w3-large" title="lizzethgd@gmail.com" href="mailto:lizzethgd@gmail.com" target="_blank"  ><i className="fa-solid fa-envelope"/></a>
  </div>
  <div className="w3-tooltip w3-right to-top-button">
    <span className="w3-text w3-padding w3-teal w3-hide-small">Go To Top</span>   
    <a className="w3-button w3-theme" href="#myPage"><span className="w3-xlarge">
    <i className="fa fa-chevron-circle-up" /></span></a>
  </div>
</footer>
    )
}

export default Footer