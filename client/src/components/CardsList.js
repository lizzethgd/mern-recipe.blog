import '../assets/css/cards.scss'
import Card from './Card'
import ShareModal from './ShareModal'
import {useState} from 'react'

const CardsList = ({pageSlice}) => {

// const [modalShow, setModalShow] = useState({show: false, newURL: ''})

const [modalShow, setModalShow] = useState(false)

//const {show, newURL} = modalShow

const modalToggle = () => setModalShow(!modalShow)
  
 
return (
 <div className="cards__container">
 {
 pageSlice.map((recipe, i) => <div key={i} className="card__ "><Card dispatch={recipe} toggle={modalToggle}/></div>)
  }
  <ShareModal showModal={modalShow} hideModal={modalToggle} /> 
</div> 
)
}

export default CardsList



