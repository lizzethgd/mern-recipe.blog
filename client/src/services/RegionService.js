export const createRegion = async (userId, token, region) => {
    return await fetch(`/region/create/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(region)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  export const getRegions = async () => {
    try{
      const response = await fetch('region/list')
      return response.json()
    }catch(err) {
        console.log(err)
     }
  }
  