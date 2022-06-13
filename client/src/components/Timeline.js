import React, { useEffect} from 'react';
import Swiper from 'swiper/bundle';
import '../assets/css/swiper.min.css';
import '../assets/css/timeline.scss';
 
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

 const slices = [
  { letter: 'a',
    title: 'Find',
    subtitle: 'very special recepties',
    text: 'Find special recipes shared by other people like you.'
  },
  { letter: 'b',
    title: 'Search',
    subtitle: 'custom your search using our filters',
    text: 'You can customize your search by category, language, and region, as well as by recipe or ingredient name.' },
  { letter: 'c',
    title: 'Enjoy',
    subtitle: 'your meal',
    text: 'Enjoying a good meal is one of the small pleasures of life'},
  { letter: 'd',
    title: 'Share',
    subtitle: 'with us your recepties',
    text: 'Share your food recipes with the world and let people rate and comment on them'
  }
 ]

    return (
     
  <div className="timeline">
    <div className="swiper-container" > 
      <div className="swiper-wrapper" >
     {
       slices.map(slice => 
        <div className={"swiper-slide "+slice.letter}  data-year={slice.title} >
          <div className="swiper-slide-content"><span className="timeline-title" >{slice.title}</span>
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


