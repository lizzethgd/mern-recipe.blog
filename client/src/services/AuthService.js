
export const checkAuthentication = async ()=>{
  const res = await fetch('user/authentication')
  if (res.status === 401)
     return { isAuthenticated: false, user: {} };
  return res.json()
}

export const authLogin = async user => {
  try{
  const res = await fetch('user/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status !== 401)
      return res.json()
    else
     return { isAuthenticated: false, user: {} };
}catch(err){console.log('error login'+err)}
}

export const authLogout = async () => {
  const res = await fetch('user/logout');
  localStorage.removeItem('search');
  return await res.json();
}
  
export const authRegister = async user =>{
  const res = await fetch('user/register', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
}

export const checkAdmin = async ()=>{
  const res = await fetch('user/admin');
  if (res.status !== 401) {
    return res.json()
  }

  else
    return { message: { msgBody: "UnAuthorized", msgError: true } };
}
    