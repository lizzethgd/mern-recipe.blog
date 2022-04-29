import '../assets/css/cards.scss'
import Card from './Card';

const CardsList = ({pageSlice}) => {
 
return (
 <div className="cards__container">
 {
 pageSlice.map((recipe, i) => <div key={i} className="card__ "><Card dispatch={recipe} /></div>)
  }

</div> 
)
}

export default CardsList



