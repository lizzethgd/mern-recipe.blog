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

const ShareModal = ({ showModal, hideModal}) => {

  const modalDisplay = showModal ? 'block' : 'none'  
  
  //const newURL = localStorage.getItem('shareUrl')

  return(
<div id="share-container" className="w3-modal w3-light-green" style={{display: modalDisplay}} >
   
    <div className="w3-modal-content w3-animate-zoom ">
    <button className="w3-button w3-deep-orange w3-large  w3-display-topright" title="Close Modal Image" onClick={hideModal} /*onClick={onClouseFullSizeImage}*/ ><i className="fa-solid fa-rectangle-xmark"/></button>
    <EmailShareButton
        url={'github.com/lizzethgd'}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    ><EmailIcon size={32} round={true} />
    </EmailShareButton>
    <br />
    <FacebookShareButton
        url={'https://github.com/lizzethgd'}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    ><FacebookIcon size={32} round={true} /> Facebookでshare
    </FacebookShareButton>
    <br />
    <FacebookMessengerShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <FacebookMessengerIcon size={32} round={true} />
    </FacebookMessengerShareButton>
    <br />
     <WhatsappShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <WhatsappIcon size={32} round={true} />
    </WhatsappShareButton>
    <br />
    <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      ><TwitterIcon size={32} round={true} /> Twitterでもshare
      </TwitterShareButton>
      <br />   
    <TelegramShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > 
    <TelegramIcon size={32} round={true} />
    </TelegramShareButton>
    <br />
    <LinkedinShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
    <br /> 
    <RedditShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > 
    <RedditIcon size={32} round={true} />
    </RedditShareButton>
    <br />
    <PinterestShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > 
    <PinterestIcon size={32} round={true} />
    </PinterestShareButton>
    <br />   
    <TumblrShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      > <TumblrIcon size={32} round={true} />
    </TumblrShareButton>
    <br />
     <VKShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
    > <VKIcon size={32} round={true} />
    </VKShareButton> 
    <br />
      <MailruShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      ><MailruIcon size={32} round={true} /> 
      </MailruShareButton>
    </div>
</div>)
}

export default ShareModal