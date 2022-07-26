import React, { useEffect} from 'react';
import Swiper from 'swiper/bundle';
import '../assets/css/swiper.min.css';
import '../assets/css/timeline.scss';
import { useTranslation } from 'react-i18next'
 
const bulletFunction = function ( index, className) {
  const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
  return '<span class="' + className + '">' + year + '</span>'}

const Timeline = () => {
  
  useEffect(() => {
  new Swiper ('.swiper-container', {
    direction: 'vertical',
    speed: 1600,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement : 'span',
      clickable: true,
      renderBullet: bulletFunction
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //mousewheel: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
});

 const { t } = useTranslation("global")

 const slices = [
  { letter: 'a',
    title: t('timeline.find.title'),
    subtitle: t('timeline.find.subtitle'),
    text: t('timeline.find.text')
  },
  { letter: 'b',
    title: t('timeline.search.title'),
    subtitle: t('timeline.search.subtitle'),
    text: t('timeline.search.text')
  },
  { letter: 'c',
    title: t('timeline.share.title'),
    subtitle: t('timeline.share.subtitle'),
    text: t('timeline.share.text')
   
  },
  { letter: 'd',
    title: t('timeline.enjoy.title'),
    subtitle: t('timeline.enjoy.subtitle'),
    text: t('timeline.enjoy.text')
  }
 ]

    return (
     
  <div className="timeline">
    <div className="swiper-container" > 
      <div className="swiper-wrapper" >
     {
       slices.map(slice => 
        <div key={slice.letter} className={"swiper-slide "+slice.letter}  data-year={slice.title} >
          <div className="swiper-slide-content">
            <span className="timeline-title" >{slice.title}</span>
            <h4 className="timeline-subtitle">{slice.subtitle}</h4>
            <p className="timeline-text">{slice.text}</p>
          </div>
        </div>)
     } 
       
      </div> 
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </div>
  </div>


    )
}

export default Timeline


