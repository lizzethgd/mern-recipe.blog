import '../assets/css/cards.scss'
import Card from './Card'
import ShareModal from './ShareModal'
import {useState} from 'react'

const CardsList = ({pageSlice}) => {

const [modalShow, setModalShow] = useState(false)

const modalToggle = () => {
  setModalShow(!modalShow)
}
 
return (
 <div className="cards__container">
 {
 pageSlice.map((recipe, i) => <div key={i} className="card__ "><Card dispatch={recipe} toggleModal={modalToggle}/></div>)
  }
  <ShareModal showModal={modalShow} toggleModal={modalToggle} /> 
</div> 
)
}

export default CardsList



