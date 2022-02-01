import { useState, useMemo, useEffect } from "react";
import {pagination} from "../helpers/funtions.js"

const Numeration = ({totalPages, currentPage, setCurrentPage, pagesNumeration}) => {

    const onChangePage = ( i) => {
        setCurrentPage(i)
        //setPageSlice(sliceData(data, i, 6))
        console.log(i)
      }

return (
    <div className="w3-padding-32 w3-text-white">   
    <div className="w3-bar">
  {/*   <button className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(1)}>«</button> */}
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=>  currentPage>1 ? onChangePage(currentPage-1): null }><i className="fa-solid fa-caret-left"/></button>
    { pagesNumeration.map( (page, i)=> {
          if (page === '...') 
          { return <button key={i} className="w3-bar-item w3-black">&#8230;</button>;}
          
          return <button key={i} className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(page)}>{ page}</button>
       })
    }   
    <button className="w3-bar-item w3-black w3-button" onClick={ ()=> currentPage<totalPages ? onChangePage(currentPage+1) : null}><i className="fa-solid fa-caret-right"/></button>   
    {/* <button className="w3-bar-item w3-black w3-button" onClick={ ()=> onChangePage(totalPages) }>»</button>  */}
    </div>
  </div>
    )
}

export default Numeration


