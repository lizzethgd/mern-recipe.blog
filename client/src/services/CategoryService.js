export const createCategory = (userId, token, category) => {
    return fetch(`category/create/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  export const getCategories = async () => {
    try{
      const response = await fetch('category/list')
      return response.json()
    }catch(err) {
        console.log(err)
     }
  }