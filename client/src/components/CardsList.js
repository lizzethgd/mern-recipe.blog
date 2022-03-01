import '../assets/css/cards.scss'
import Card from './Card';

const CardsList = ({pageSlice}) => {
 
return (
 <div className="cards__container">
 {
 pageSlice.map((recipe, i) => <div key={i} className="card__ "><Card recipe={recipe} /></div>)
  }

</div> 
)
}

export default CardsList

  {/* <Card key={i} author={recipe.author.username} date="1 min" title={recipe.title} pic="https://source.unsplash.com/300x225/?desert" 
     description={recipe.description}  nLikes={recipe.likes.length} nFavs={2} /> */}

