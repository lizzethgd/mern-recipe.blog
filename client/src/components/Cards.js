import '../assets/css/cards.scss'
import Card from './Card';

const Cards = () => {
     

return (
 <div className="cards__container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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