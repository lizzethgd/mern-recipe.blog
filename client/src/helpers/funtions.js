export const sliceData = (data, page, itemsPerPage) => {
  return data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
};


export const pagesRange = (start, end) => {
  //const length = end - start + 1;
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  } 
  //const range = Array.from({ length}, (_, idx) => idx + start); 
  console.log(range)
  return range
};

//const [result,setResult] = useState([]);

export const pagination = (totalCount, siblingCount,currentPage) => { 

    const DOTS = '...'
    
    //total pages number
    const totalPageCount = totalCount
    
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    // If the number of pages is less than the page numbers we want to show in our
    //  paginationComponent, we return the range [1..totalPageCount]
    
    if (totalPageNumbers >= totalPageCount) {
      return pagesRange(1, totalPageCount)
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
 
 
  }

  
