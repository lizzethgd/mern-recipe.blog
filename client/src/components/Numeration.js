import { useState, useCallback, useEffect} from "react";
import {slicer, paginater} from "../helpers/funtions.js"

const Numeration = ({data, setPageSlice}) => {

  const pageSize = 2
  const sibling = 1
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(); //total number of pages 
  const [pagesNumeration, setPagesNumeration] = useState([]); //tipe of numeration
  
  const onChangePage = ( i) => {
        setCurrentPage(i)
        //setPageSlice(slicer(data, i, pageSize))
      }

 const init = useCallback(async () => {
    const totalPages = Math.ceil((data.length) / pageSize);
    setTotalPages(totalPages)
    const slice = slicer(data, currentPage, pageSize)
    setPageSlice(slice)
    const numerationPages = paginater(totalPages, sibling, currentPage)
    setPagesNumeration(numerationPages)
    console.log('Total recetas: '+data.length+', Total pages: '+totalPages
    +', paginas: '+numerationPages+', Current Page: '+currentPage)
    console.log(slice)}, [data, currentPage, setPageSlice])   

    useEffect(() => {
      try{  
        init() 
      }catch(err){
        console.log('error in the numeration component: '+err) 
      }
}, [init]) 

return (
    <div className="w3-padding-32 w3-text-white">   
    <div className="w3-bar">
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=>  currentPage>1 ? onChangePage(currentPage-1): null }><i className="fa-solid fa-caret-left"/></button>
    { pagesNumeration.map( (page, i)=> {
          if (page === '...') 
          { return <button key={i} className="w3-bar-item w3-black">&#8230;</button>;}
          
          return <button key={i} className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(page)}>{ page}</button>
       })
    }   
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> currentPage<totalPages ? onChangePage(currentPage+1) : null}><i className="fa-solid fa-caret-right"/></button>   
    </div>
  </div>
    )
}

export default Numeration


