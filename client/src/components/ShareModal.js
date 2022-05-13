import '../assets/css/share.scss'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    MailruShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
  } from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    MailruIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    VKIcon,
    WhatsappIcon,
  } from "react-share";

const ShareModal = ({ showModal, toggleModal}) => {

const modalDisplay = showModal ? 'block' : 'none' 
  
const shareURL = localStorage.getItem('shareUrl') 

const closeModal = () =>{
  toggleModal()
  localStorage.removeItem('shareUrl')
}

  const copyURL = () => {
      const url = document.getElementById('inputURL')
      url.select()
      document.execCommand('copy')
      //navigator.clipboard.writeText(shareURL)
  }

  return(
<div id="share-container" className="w3-modal" style={{display: modalDisplay}} >
   
    <div className="w3-modal-content w3-animate-zoom w3-round-large w3-light-grey modal_content">
    <div className="modal_head"><span className='titles'>Share via</span><i className="fa-solid fa-xmark w3-button w3-deep-orange w3-large w3-display-topright close" title="Close" onClick={closeModal}/></div>
    <hr className='hr-1' />

    <div className='modal_body'>
    <div className='social_div'>
    <EmailShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    ><EmailIcon size={32} round={true} />
    <p>Email</p>
    </EmailShareButton>
    </div>
    <div className='social_div'>
    <FacebookShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    ><FacebookIcon size={32} round={true} />
    <p>Facebook</p> 
    </FacebookShareButton>
    </div>
    <div className='social_div'>
    <FacebookMessengerShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <FacebookMessengerIcon size={32} round={true} />
    <p>Messenger</p> 
    </FacebookMessengerShareButton>
    </div>
    <div className='social_div'>
     <WhatsappShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <WhatsappIcon size={32} round={true} />
    <p>Whatsapp</p> 
    </WhatsappShareButton>
    </div>
    <div className='social_div'> 
    <TwitterShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtags={["hashtag1", "hashtag2"]}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      ><TwitterIcon size={32} round={true} />
     <p>Twitter</p> 
      </TwitterShareButton>
     </div> 
     <div className='social_div'>  
    <TelegramShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    ><TelegramIcon size={32} round={true} />
     <p>Telegram</p> 
    </TelegramShareButton>
    </div>
    <div className='social_div'>
    <LinkedinShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <LinkedinIcon size={32} round={true} />
    <p>Linkedin</p> 
    </LinkedinShareButton>
    </div>
    <div className='social_div'>
    <RedditShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    ><RedditIcon size={32} round={true} />
    <p>Reddit</p> 
    </RedditShareButton>
    </div>
    <div className='social_div'>
    <PinterestShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <PinterestIcon size={32} round={true} />
    <p>Pinteres</p> 
    </PinterestShareButton>
    </div>
    <div className='social_div'>  
    <TumblrShareButton
        title={"test"}
        url={shareURL}
        hashtags={["hashtag1", "hashtag2"]}
      > <TumblrIcon size={32} round={true} />
       <p>Tumblr</p> 
    </TumblrShareButton>
    </div>
    <div className='social_div'>
     <VKShareButton
        url={shareURL}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <VKIcon size={32} round={true} />
     <p>VK</p> 
    </VKShareButton>
    </div>
    <div className='social_div'>
      <MailruShareButton
        title={"test"}
        url={shareURL}
        hashtags={["hashtag1", "hashtag2"]}
      ><MailruIcon size={32} round={true} />
      <p>Mailru</p>  
      </MailruShareButton>
      </div>
      </div>
      <hr className='hr-2'/>  
     <div className='modal_footer'>
      <div className="titles" >Or copy link <span className="message"></span></div>
        <form className="url_copy">
         <i className="fa-solid fa-link link_icon"/>
          <input className="url_input" id="inputURL" type="url" /* placeholder={shareURL} */
          aria-describedby="inputGroup-sizing-default" defaultValue={shareURL } />
            <button className="fa-solid fa-clone copy_url" onClick={copyURL} title="copy url"/>
        </form>
      </div> 
    
    </div>
</div>)
}

export default ShareModal