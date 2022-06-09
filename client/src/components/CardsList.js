import '../assets/css/cards.scss'
import Card from './Card'
import ShareModal from './ShareModal'
import {useState/*, useEffect, useCallback */} from 'react'

const CardsList = ({pageSlice}) => {

console.log(pageSlice)

//const [slice, setSlice] = useState([])

const [modalShow, setModalShow] = useState(false)

const modalToggle = () => {
  setModalShow(!modalShow)
}

/* const initList = useCallback(async() => {
     setSlice(pageSlice)
}, [pageSlice]);

useEffect(() => {
  (async () => { 
     try{   
      initList()
    }catch(err){
       console.log(err)
   }
  }) () 
},[initList]) */
 
return (
 <div className="cards__container">
 {
 pageSlice.map((recipe, i) => <div key={i} className="card__ "><Card id={recipe._id} toggleModal={modalToggle}/></div>)
  }
  <ShareModal showModal={modalShow} toggleModal={modalToggle} />  
</div> 
)
}

export default CardsList



