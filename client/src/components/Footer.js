import "../assets/css/footer.scss"

const Footer = () => {
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
return (
<footer className="w3-container container-footer w3-theme-d5">
  
  <div className="w3-center" style={{paddingBottom: 0}}>
    <a className="w3-large name" href="https://lizzethgd.herokuapp.com/" target="_blank" rel="noreferrer"><h4>Lizzeth Garcia</h4></a>
    <a className="w3-button w3-large" title="Linkedin" href="https://www.linkedin.com/in/lizzeth-garcia-27b841b4" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" /></a>
    <a className="w3-button w3-large" title="Discord" href="https://discord.gg/kUAvYXT8" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord" /></a>
    <a className="w3-button w3-large" title="Telegram" href="https://t.me/LizzethGD" target="_blank" rel="noreferrer"><i className="fa-brands fa-telegram" /></a>
    {/* <a className="w3-button w3-large" title="Instagram" href="https://www.instagram.com/lizzethgd.dev" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a> 
    <a className="w3-button w3-large" title="Github" href="https://github.com/lizzethgd" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>*/}
    <a className="w3-button w3-large" title="lizzethgd@gmail.com" href="mailto:lizzethgd@gmail.com"  ><i className="fa-solid fa-envelope"/></a>
  </div>
  <div className="w3-tooltip w3-right to-top-button">
    <span className="w3-text w3-padding w3-teal w3-hide-small">Go To Top</span>   
    <button className="w3-button w3-theme" onClick={scrollToTop}><span className="w3-xlarge">
    <i className="fa fa-chevron-circle-up" /></span></button>
  </div>
</footer>
    )
}

export default Footer