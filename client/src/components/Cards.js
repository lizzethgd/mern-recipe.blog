import '../assets/css/cards.scss'
import Card from './Card';

const Cards = () => {
     

return (
 <div className="cards__container">
    <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2} />
    <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
    <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
    <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
    <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
    <Card author="John Doe" date="1 min" title="Card title" pic="https://source.unsplash.com/300x225/?desert" description=" This grid is an attempt to make something nice that works on touch devices." category="Dessert" nLikes={3} nFavs={2}/>
 </div>     
    )
}

export default Cards



         /*  let container = document.getElementById("cards__container")

          let cards = document.getElementsByClassName('card__')    
       
       if ( card.classList.contains("focused")) {
            card.classList.remove("focused") 
            container.classList.remove("unfocused")       
          }
          else{
              //this line is my creation
            for (let card of cards) {
              card.classList.remove("focused")
              card.style.zIndex = 0
            }
            container.classList.add("unfocused")
            card.classList.add("focused")
            card.style.zIndex = 1
        }        */