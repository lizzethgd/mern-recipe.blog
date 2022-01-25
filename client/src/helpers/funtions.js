export const calculateRange = (length, cardsPerPage) => {
    const range = [];
    const num = Math.ceil(length / cardsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range
  };

  export const sliceData = (data, page, cardsPerPage) => {
    return data.slice((page - 1) * cardsPerPage, page * cardsPerPage);
  };


