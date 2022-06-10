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
    title: 'Share',
    subtitle: 'with us your recepties',
    text: 'Share your food recipes with the world and let people rate and comment on them'},
  { letter: 'b',
    title: 'Search',
    subtitle: 'recepties using our filters',
    text: 'You can customize your search by category, language, and region, as well as by recipe or ingredient name.' },
  { letter: 'c',
    title: 'Find',
    subtitle: 'very special receptie',
    text: 'Find special recipes shared by other people like you.'},
  { letter: 'd',
    title: 'Enjoy',
    subtitle: 'your meal',
    text: 'Enjoying a good meal is one of the small pleasures of life'
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


