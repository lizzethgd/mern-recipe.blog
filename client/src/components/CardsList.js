import '../assets/css/cards.scss'
import Card from './Card'
import ShareModal from './ShareModal'
import {useState/*, useEffect, useCallback */} from 'react'

const CardsList = ({pageSlice}) => {

console.log(pageSlice)

const [modalShow, setModalShow] = useState(false)

const modalToggle = () => {
  setModalShow(!modalShow)
}
 
return (
 <div className="cards__container w3-center">
 {
 pageSlice.map((recipe, i) => <div key={i} className="card__ "><Card id={recipe._id} toggleModal={modalToggle}/></div>)
  }
  <ShareModal showModal={modalShow} toggleModal={modalToggle} /> 
</div> 
)
}

export default CardsList



