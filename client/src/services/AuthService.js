
export const checkAuthentication = async ()=>{
  const res = await fetch('/user/authentication').then(response => response.json())
  if (res.status === 401)
    return res
  else if (localStorage.length !== 0)
    return JSON.parse(localStorage.getItem('AuthData'))
  else  
    return { isAuthenticated: false, user: {} };
}

export const authLogin = async user => {
  const res = await fetch('user/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 401)
      return res.json()
    else
     return { isAuthenticated: false, user: {} };
}

export const authLogout = async () => {
  const res = await fetch('user/logout');
  localStorage.clear();
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
    