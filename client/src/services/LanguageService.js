export const createLanguage = async (userId, token, language) => {
  return await fetch(`language/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(language)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const getLanguage = async (code) => {
  try{
    const response = await fetch(`language/${code}`)
    return response.json()
  }catch(err) {
      console.log(err)
   }
}

export const getLanguages = async () => {
  try{
    const response = await fetch('language/list')
    return response.json()
  }catch(err) {
      console.log(err)
   }
}
