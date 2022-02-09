exports.recipeById =  (req, res, next, id) => {
    Recipe.findById(id).
     populate('author', 'username').
     populate('category', 'name').
     populate('language', 'name').
     populate('region', 'name').
     exec((err, recipe) => {
       if (err || !recipe) {
         return res.status(400).json({
           error: "Recipe not found"
         });
       }
       req.recipe = recipe;
       next();
     })
   } 

   exports.remove = (req, res) => {
   let recipe = req.recipe
    recipe.remove((err, data) => {
      if(err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json({
        message: "Recipe succesfully deleted"
      })
    }) 
  }

  exports.remove = (req, res) => {
    let category = req.category
    category.remove((err, data) => {
      if(err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json({
        message: "Category succesfully deleted"
      })
    })
  }

  exports.remove = (req, res) => {
    let Language = req.language
    Language.remove((err, data) => {
      if(err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json({
        message: "Language succesfully deleted"
      })
    })
  }


exports.remove = (req, res) => {
  let region = req.region
  region.remove((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Region succesfully deleted"
    })
  })
}

/* exports.regionById = (req, res, next, id) => {
 Region.findById(id).exec((err, region) => {
    if (err || !region) {
      return res.status(400).json({
        error: "Region does not exist"
      });
    }
    req.region = region;
    next();
  })
} */

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).
  exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category does not exist"
      });
    }
    req.category = category;
    next();
  })
}

/* const timepicker = new TimePicker('time', {
        lang: 'en',
        theme: 'dark'
      });
      
      const timeInput = document.getElementById('time');
      
      timepicker.on('change', function(e) {
        
        const value = (e.hour || '00') + ':' + (e.minute || '00');
        e.element.value = value;
      
      }); */

/* 
      exports.list = (req, res) => {
        let order = req.query.order ? req.query.order : 'asc'
        let sortBy = req.query.sortBy ? req.query.sortBy : 'name'
        
        Recipe.find()
          .select("-photo")
          .populate('user')
          .populate('category')
          .populate('language')
          .populate('region')
          .sort([[sortBy, order]])
          .exec((err, recipes) => {
            if (err) {
              return res.status(400).json({
                error: "Recipes not found"
              })
            }
            res.json(recipes);
          })
      } */

      /* 
exports.create = (req, res) => {
  const recipe = new Recipe(req.body)
  recipe.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({data});
  })
} */


/*   const loadRecipes = () => {
    getAllRecipes().then(data =>{
      if (data.error) {
        console.log(data.error)
      } else {
    setRecipes(data)
    console.log(data)
      }
  })
}  */

/* useEffect(() => {
  (async () => { 
     try{
       const data =  await getAllRecipes()
       const totalPages = Math.ceil(data.length / pageSize);
       setTotalPages(totalPages)
       // const totalPages = calculatePages(data.length, pageSize)
       // setTotalPages(totalPages)
       // console.log(totalPages.length) 
     //const pag = pagination(data.length, pageSize, siblingCount, currentPage)
       //console.log(pag)
       setPageSlice(sliceData(data, currentPage, pageSize))
       setPagesNumeration(pagination(totalPages, sibling, currentPage))
    }catch(err){
       console.log(err)
   }
  }) () 
 // }, [data, setTotalPages, currentPage, setPageSlice]);
}, [sliceData, pagination, pageSize, sibling, currentPage, setTotalPages, setPagesNumeration, setPageSlice]);
 */

/* function newFunction(setPageSlice, data, currentPage) {
  setPageSlice(sliceData(data, currentPage, 6));
} */

/* export const usePagination = ({
  // totalCount, //recipes.length
   totalPages,
   pageSize,
   siblingCount,
   currentPage,
 }) => {
 
   const paginationRange = useMemo(() => {
 
     const DOTS = '...'
    
     //total pages number
     const totalPageCount = totalPages.length
 
     // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
     const totalPageNumbers = siblingCount + 5;
 
     // If the number of pages is less than the page numbers we want to show in our
     //  paginationComponent, we return the range [1..totalPageCount]
     
     if (totalPageNumbers >= totalPageCount) {
       return pagesRange(1, totalPageCount);
     }
 
     const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
     const rightSiblingIndex = Math.min(
       currentPage + siblingCount,
       totalPageCount
     );
 
     
     // We do not want to show dots if there is only one position left 
     // after/before the left/right page count as that would lead to a change if our Pagination
     // component size which we do not want
     
     const shouldShowLeftDots = leftSiblingIndex > 2;
     const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
 
     const firstPageIndex = 1;
     const lastPageIndex = totalPageCount;
 
     if (!shouldShowLeftDots && shouldShowRightDots) {
       let leftItemCount = 3 + 2 * siblingCount;
       let leftRange = pagesRange(1, leftItemCount);
 
       return [...leftRange, DOTS, totalPageCount];
     }
 
     if (shouldShowLeftDots && !shouldShowRightDots) {
       let rightItemCount = 3 + 2 * siblingCount;
       let rightRange = pagesRange(
         totalPageCount - rightItemCount + 1,
         totalPageCount
       );
       return [firstPageIndex, DOTS, ...rightRange];
     }
 
     if (shouldShowLeftDots && shouldShowRightDots) {
       let middleRange = pagesRange(leftSiblingIndex, rightSiblingIndex);
       return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
     }
   }, [totalPages, pageSize, siblingCount, currentPage]);
 
   return paginationRange;
 } */



 /* 
export const calculatePages = (length, cardsPerPage) => {
    const range = [];
    const num = Math.ceil(length / cardsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range
}; */